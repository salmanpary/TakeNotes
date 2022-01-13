const chalk=require("chalk")
const { demandOption } = require("yargs")
const yargs=require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',

        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'

        }

    },
    handler:(argv) => {
        notes.addnote(argv.title, argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) => {
        notes.removenotes(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'listing',
    handler:() => {
        notes.listnotes()
    }

})
yargs.command({
    command:'read',
    describe:'reading',
    builder:{
        title:{
            describe:"reading a task",
            demandOption:true,
            type:'string'


        }
    },
    handler:(argv) => {
        notes.readnotes(argv.title)
    }
})
yargs.parse()
