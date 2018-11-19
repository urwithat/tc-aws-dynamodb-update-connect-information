TC AWS Dynamo Update Connect Infomration
========================================

<dl>
  <dt>Description</dt>
  <dd>Tool to help pull data from Dynamo and alter based on need</dd>
  <dt>Technology</dt>
  <dd>Console based application, help fix inconsistent data.</dd>
</dl>

---

##  Features Covered
- Query / Delete / Put data from DynamoDB

##  Know Issues
- NA

##  Good To Have Features
- NA

> Note: 
> + All commands are in par with MacOS
> + Run commands from root folder /Workspace/../tc-aws-dynamodb-update-connect-information-repository

---

##  Running the Web Application
####  Software Stack To Run the Executable
| No | Software                 | Tested on Version |
| -- |:------------------------:| -----------------:|
| 01 | *node*                   | v8.9.2            |
| 02 | *npm*                    | v5.5.1            |

####  Start Up Web Application
- Go to folder
```
/Workspace/../tc-aws-dynamodb-update-connect-information-repository
```
- Pull master branch
```
git clone -b master https://github.com/urwithat/tc-aws-dynamodb-update-connect-information.git
```
```
git pull origin master
```
- Go to folder
```
cd tc-aws-dynamodb-update-connect-information/
```
- Add your AWS accessKeyId & secretAccessKey
```
config.json
```
- run the application
```
npm i; node index.js
```
> **The Application should have executed**