import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use(cors())

import { absences, members } from "./api.js"

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
        absence["status"] = addStatus(absence)
        db.membersData.forEach(member => {
            if (absence.userId === member.userId) {
                absence["name"] = member.name;
                enrichedAbsences.push(absence);
            }
        });
    })
    return enrichedAbsences;
}

const addStatus = (absence) => {
    if (absence.confirmedAt) {
        return "confirmed"
    } else if (absence.rejectedAt) {
        return "rejected"
    } else {
        return "requested"
    }
}

app.listen(3000, () => {
    console.log("app is running on port 3000");
})