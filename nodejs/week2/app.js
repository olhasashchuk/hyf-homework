import express from 'express'
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

let documents = [];
const data = fs.readFileSync('documents.json', 'utf8');
documents = JSON.parse(data);

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

///search?q=hello

function getFilterDocuments(lowerCaseQuery) {
  return documents.filter(doc => {
    return Object.values(doc).some(value => {
      if (typeof value !== 'string') return false;
      return value.toLowerCase().includes(lowerCaseQuery);
    });
  });
}

function searchDocuments(documents, query) {
  const lowerCaseQuery = query.toLowerCase();
  return getFilterDocuments(lowerCaseQuery)
 }
 
 app.get("/search", (req, res) => {
   const query = req.query.q;
   if (!query) {
     return res.json(documents);
   }
   const result = searchDocuments(documents, query);
   res.json(result);
 });

// /documents/:id

app.get("/documents/:id", (req, res) => {
   const queryId = parseInt(req.params.id);
   const document = documents.find(doc => doc.id === queryId)
   if(document) {
      res.json(document);
   } else {
      res.status(404).send(`Document can't find`)
   }
});

//POST /search

function searchDocumentsPost(documents, query = null, fields = null) {
   if (fields) {
     return documents.filter(doc =>
       Object.entries(fields).every(([key, value]) => doc[key] === value)
     );
   }
   if (query) {
     const lowerCaseQuery = query.toLowerCase();
     return getFilterDocuments(lowerCaseQuery)
   }
   return documents;
 }

 app.post("/search", (req, res) => {
   const query = req.body.q;
   const fields = req.body.fields;
   if (query && fields) {
     return res.status(400).json({ error: "Provide either query or fields, not both." });
   }
   const result = searchDocumentsPost(documents, query, fields);
   res.json(result);
 });