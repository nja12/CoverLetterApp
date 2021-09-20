
const readline = require('readline');
var Company = require("./company.js");
var textTemplate = require('./textTemplate.js');

company01 = new Company("taras tatoos", "ink layer", "lay that ink")
text01 = new textTemplate(company01)
const sign_off = "Sincerely /n Nicholas Adamson /n 0276960240"
var text_full = "\nDear " + company01.name + "\nRE: " + company01.position + "\n\nits exciting to see that " + company01.name + " are seeking an " + company01.position + " to " + company01.purpose
const fs = require('fs')


const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});



console.log("this comes first")


r1.question('enter company name: ', (companyName) => {
	r1.question('Enter position: ', (companyPosition) => {
		r1.question("Enter role purpose: ", (companyPurpose) => {
			company01.position = companyPosition;
			company01.name = companyName;
			company01.purpose = companyPurpose;
			text01.setCompany(company01);
			console.log("company name is " + company01.name);
			console.log(text01.text());
			fs.writeFile('/users/nick/projects/Node_apps/coverletter_app/coverletter.txt', text01.text(), (err) => {
				if (err)
						console.log(err)
					else{
						console.log("File write successfully/n")
						console.log("The file has the following contents")
						console.log(fs.readFileSync("./coverletter_app/coverletter.txt", "utf8"))
						}
					}
				);
			r1.close(); 
		});
	});
});




