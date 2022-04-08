import express from "express"
import { absences, members } from "./api.js"
import cors from "cors"

const app = express()
app.use(cors())
const db = {
    absenceData: await absences(),
    membersData: await members()
}

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/members", (req, res) => {
    res.send(db.membersData)
})

app.get("/absences", (req, res) => {
    const enrichedAbsence = []
    db.absenceData.forEach((absence, i) => {
        db.membersData.forEach(member => {
            if(absence.userId === member.userId) {
                absence["name"] = member.name;
                enrichedAbsence.push(absence);
            }
        });
    })
    res.send(enrichedAbsence)
})

app.listen(3000, () => {
    console.log("app is running on port 3000");
})
