### Routes

### Auth
[] POST	    /auth/login	        username, password	User logged
[] POST	    /auth/signup	    username, password, campus, course	User created
[] POST	    /auth/upload	    file	User updated
[] POST	    /auth/edit	        username, campus, course	User updated
[] GET	    /auth/logout		OK Message
[] GET	    /auth/loggedin		User logged

### Home
[] GET     /home                Home page
[] GET     /                    Index

### Helpers
[] GET     /helper-profil       Profil of one helper

### Service search
[] GET     /${my-service-name}        Select option of service search
[] POST    /${my-service-name}        Service preference, type, duration, dates

### Service selection
[] GET      /my-services                List of helper rated of this service
[] POST     /my-services                Select one of helpers

### Booking
[] GET      /booking                        Resume of service and helper choose
[] POST     /booking/selected-service       Post selection of service and helper choose

### Booking
[] GET      /booking/ongoing                List of services in progress
[] POST     /booking/ongoing/id             Detail of one service in progress 
[] POST     /booking/ongoing/delete/id      Delete of one service in progress 
[] GET      /booking/history                List of services passed
[] POST     /booking/history/id             Detail of one service passed

### User profil
[] GET       /personel-info                 Details of your personal info
[] POST      /personel-info/edit            Edit of personal info

[] GET       /payment                       Details of your credit card 
[] POST      /payment/edit                  Edit details of your credit card

