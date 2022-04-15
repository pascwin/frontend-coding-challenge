import express from "express"
import { absences, members } from "./api.js"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use(cors())

const db = {
    absenceData: await absences(),
    membersData: await members()
}

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/absences", (req, res) => {
    const { date, status } = req.body
    const enrichedAbsences = enrichAbsences()
    if (!date && status === "no status filter") {
        res.send(enrichedAbsences)
    } else {
        const filteredAbsences = filterAbsences(date, status)
        res.send(filteredAbsences)
    }
})


const filterAbsences = (date, status) => {
    const enrichedAbsences = enrichAbsences()
    const filteredAbsences = []
    if (date && status !== "no status filter") {
        enrichedAbsences.forEach(absence => {
            if (absence.status === status && absence.startDate > date) {
                filteredAbsences.push(absence)
            }
        })
        return filteredAbsences;
    } else if (date && status === "no status filter") {
        enrichedAbsences.forEach(absence => {
            if (absence.startDate > date) {
                filteredAbsences.push(absence)
            }
        })
        console.log("hello")
        return filteredAbsences;
    } else {
        enrichedAbsences.forEach(absence => {
            if (absence.status === status) {
                filteredAbsences.push(absence)
            }
        })
        return filteredAbsences;
    }
}

const enrichAbsences = () => {
    const enrichedAbsences = []
    db.absenceData.forEach((absence, i) => {
        if (absence.confirmedAt) {
            absence["status"] = "confirmed"
        } else if (absence.rejectedAt) {
            absence["status"] = "rejected"
        } else {
            absence["status"] = "requested"
        }
        db.membersData.forEach(member => {
            if (absence.userId === member.userId) {
                absence["name"] = member.name;
                enrichedAbsences.push(absence);
            }
        });
    })
    return enrichedAbsences;
}



app.listen(3000, () => {
    console.log("app is running on port 3000");
})
