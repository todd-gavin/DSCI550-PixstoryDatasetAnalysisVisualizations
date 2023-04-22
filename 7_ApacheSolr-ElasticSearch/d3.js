d3.json("http://localhost:8983/solr/assignment3/select?q=*:*", function(error, data) {
  if (error) throw error;
  var documents = data.response.docs;
  // Do something with the parsed data
});



