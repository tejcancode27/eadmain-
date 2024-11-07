const express = require('express')
const router = express.Router()
const Student = require('../Models/student')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await Student.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const student = await Student.findById(req.params.id)
           res.json(student)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const student = new Student
   ({
        Name: req.body.Name,
        // Dob:req.body.Dob,
        Roll_No:req.body.Roll_No,
        Branch: req.body.Branch,
        Sub: req.body.Sub,
        Section:req.body.Section,
        Year:req.body.Year
    })

    try
   {
        const a1 =  await student.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const student = await Student.findById(req.params.id) 
        student.Sub = req.body.Sub
        const a1 = await student.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=>
    {
        try
        {
            const student=await Student.deleteOne({_id:req.params.id})
    
        }
        catch(err)
        {
            res.send('Error')
        }
    })

module.exports = router
