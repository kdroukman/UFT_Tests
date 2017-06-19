Browser("HP - United States | SFDC").Page("HP - United States | SFDC").Link("Hewlett Packard Enterprise").Click
Browser("HP - United States | SFDC").Page("HP Log on").WebEdit("pf.username").Set "ekaterina.droukman@hpe.com"
Browser("HP - United States | SFDC").Page("HP Log on").WebEdit("pf.pass").SetSecure "594800859c757ea59d4c416f49211d958e64e20b023e8ec4ea8aabab001292e6"
Browser("HP - United States | SFDC").Page("HP Log on").WebButton("Log on").Click
Browser("HP - United States | SFDC").Page("Salesforce - Unlimited").Link("Campaigns").Click
Browser("HP - United States | SFDC").Page("Campaigns: Home ~ Salesforce").WebElement("HPSW WW Cross SW HP.com").Click
Browser("HP - United States | SFDC").Page("Campaigns: Home ~ Salesforce").WebElement("344522 HPSW ADM WW Q114").Click
Browser("HP - United States | SFDC").Page("Campaigns: Home ~ Salesforce").Link("HPSW WW Cross SW HP.com").Check CheckPoint("HPSW WW Cross SW HP.com Contact Us Form Submissions - Web Form")
Browser("HP - United States | SFDC").Page("Campaigns: Home ~ Salesforce").Link("Reports").Click
Browser("HP - United States | SFDC").Page("Reports ~ Salesforce -").WebButton("New Report...").Click
Browser("HP - United States | SFDC").Page("Select Report Type ~ Salesforc").Image("AMDAwAAAACH5BAEAAAAALAAAAAABAA").Click
Browser("HP - United States | SFDC").Page("Select Report Type ~ Salesforc").Link("Tasks and Events").Click
Browser("HP - United States | SFDC").Page("Select Report Type ~ Salesforc").WebButton("Create").Click
Browser("HP - United States | SFDC").Page("Select Report Type ~ Salesforc").WebButton("Run Report").Click
