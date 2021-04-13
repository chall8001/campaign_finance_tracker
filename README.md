# campaign_finance_tracker
The Campaign Finance Tracker is a full-stack appliaction that allows constituents to see their federal representatives' largest campaign donors. All data is taken from [the Center for Responsive Politics](https://www.opensecrets.org). 

When a user types in a politician, they query my local database filled with corresponding CRP codes. A matching code is then sent back to the front end, and is inserted into an API call to the Center for Responsive Politics's Servers. I append the data I receive from them to the page-- thus displaying it to the user. A note: The CRP doesn't support api calls on every politician, thus some candidates may not pop-up when you search them.  

This application uses Jquery, MySQL, Node, Express, and Bootstrap. Although the CRP has it's own libraries to incorporate data, it was more fun and challenging to build my own back end. 

My email is chall8001@gmail.com and my linkedin is (https://www.linkedin.com/in/charles--hall/), please reach out if you have any questions, comments, or concerns. 



