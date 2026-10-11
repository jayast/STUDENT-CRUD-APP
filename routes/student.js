const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
router.get("/", async (req, res) => {
    const students = await Student.find();
    res.render("index", { students });
});
router.get("/new", (req, res) => {
    res.render("new");
});

router.post("/", async (req, res) => {
    await Student.create(req.body);
    res.redirect("/");
});
router.get("/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("show", { student });
});
router.get("/:id/edit", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student });
});

router.post("/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});
router.post("/:id/delete", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
}); module.exports = router;
