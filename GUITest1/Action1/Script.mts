Browser("HP - United States | SFDC").Page("HP - United States | SFDC").WebElement("Click on the link that").Click
Browser("HP - United States | SFDC").Page("HP - United States | SFDC").Link("Hewlett Packard Enterprise").Click
Browser("HP - United States | SFDC").Page("HP Log on").WebEdit("pf.username").Set "ekaterina.droukman@hpe.com"
Browser("HP - United States | SFDC").Page("HP Log on").WebEdit("pf.pass").SetSecure "5948a3639f70"
Browser("HP - United States | SFDC").Page("HP Log on").WebEdit("pf.pass").SetSecure "5948a36bc9cba76fa237f44ed8d9e1e9b5b6c15ab7088b06fea3fb30529384a5"

Browser("HP - United States | SFDC").Page("Campaign: HPSW ADM APJ").Link("Leads").Click
Browser("HP - United States | SFDC").Page("Salesforce - Unlimited_2").WebButton("New Lead").Click
Browser("HP - United States | SFDC").Page("Lead Edit: New Lead ~").WebEdit("name_firstlea2").Set DataTable("first", dtGlobalSheet)
Browser("HP - United States | SFDC").Page("Lead Edit: New Lead ~").WebEdit("name_lastlea2").Set DataTable("last", dtGlobalSheet)
Browser("HP - United States | SFDC").Page("Lead Edit: New Lead ~").WebEdit("lea3").Set "jhkljhklj"
Browser("HP - United States | SFDC").Page("Lead Edit: New Lead ~").WebList("lea13").Select "Closed"
Browser("HP - United States | SFDC").Page("Lead Edit: New Lead ~").WebButton("Cancel").Click
