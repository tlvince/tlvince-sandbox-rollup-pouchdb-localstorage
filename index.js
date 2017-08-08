import PouchDB from 'pouchdb-core'
import localStorageAdapter from 'pouchdb-adapter-localstorage'

PouchDB
  .plugin(localStorageAdapter)

const db = new PouchDB('test')
db.info()
  .then(res => console.log(res))
