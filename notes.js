const fs=require('fs')
const chalk=require('chalk')
const getNotes = function () {
    return 'Your notes...'
}
const addnote=(title, body) => {
    const notes = loadnote()
    // const duplicatenotes = notes.filter((note) => note.title === title)
    const duplicatenote=notes.find((note)=>note.title===title)

    if (!duplicatenote) {
        notes.push(
            {
                title: title,
                body: body,
            }
        )
        savenotes(notes)
    }
    else {
        console.log('note title taken')
    }
}
const savenotes=(notes) => {
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', datajson)
}
const removenotes=(title) => {
    const notes = loadnote()
    const updated = notes.filter(function (note) {
        return note.title != title
    })
    if (notes.length > updated.length) {
        console.log(chalk.green.inverse("note removed"))


    }
    else {
        console.log(chalk.red.inverse("no note found"))
    }






    savenotes(updated)

}

const  loadnote=() => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)

    } catch (error) {
        return []

    }

}
const listnotes=()=>{
    const notes=loadnote()
    console.log(chalk.inverse("your notes"))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const readnotes=(title)=>{
    const notes=loadnote()
    const note=notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    }
    else{
        console.log(chalk.red.inverse('note not found'))

    }
}
module.exports = {
    getNotes:getNotes,
    addnote:addnote,
    removenotes:removenotes,
    listnotes:listnotes,
    readnotes:readnotes,
}