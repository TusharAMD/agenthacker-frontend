## Inspiration
If you are a Spy or Detective then obviously you can't lead a normal life and use messaging applications made for normies. You need a special messaging app to talk with your mates. Using our app you can chat in public without worring about someone reading your chats.
## What it does
Its a web app with real time messaging. The messages are encrypted using Caesar cipher algorithm
1. Login into the website
2. Create or Join room
3. After creating you will get a unique code which can be shared with your friends to chat with you
4. Any number of people can join the room
5. Send Messages and it will be encrypted in realtime
6. Avatars are generated also initials are used so identity is not revealed 
7. If you wish to see the actual text simply click toggle button and you will get OTP on Whatsapp number using Twilio implementation.
8. Toggle back to be in encrypted mode

## How we built it
The following are tech stack we used
1. React : To perform all frontend operations, make Get and Post requests etc
2. Flask: For Twilio and also to Caesar cipher the text
3. Firestore: Realtime database for messaging
4. Mongodb: To store mobile nos of user for messaging purpose
5. Twilio: For sending OTPs on Whatsapp

## How it works
Authentication is done by Auth0, then once user is created he/she adds mobile number to get OTP by Whatsapp using Twilio. This number is saved in database using flask and email id acts as primary key. We have also created a Jdenticon (similar to identicon in github user profile) to give a feel of anonymity and also a nice uniform pattern in group chat. When user clicks create room a unique code is generated in backend (flask) with help of uuid library and then room in created and user is directed there. Its much similar to google meet and then user has to give the link to his/her friends who want to join the chat. Once joined message can be send. These messages are added in firestore database which is realtime and thus it is reflected as soon as someone enters the text. Now database content is send to backend where they are encrypted using Caeser Cipher algorithm and then response (encrypted text) is shown to user. There is toggle just on right of send button which can be clicked to make text readable. But for that user needs to verify themselves. Now we could have done that using email but since we had to twilio we did it using whatsapp and we found that its much more efficient than mails. So after clicking toggle flask creates a 4 digit unique pin which is then send to frontend. This pin is verified and if found correct encryption is remove. To re encrypt the text there is no need for otp as Agent want to hide text real fast. There is no limit to number of people joining the chat room.

## Challenges we ran into
We had hard time figuring out what to choose, websockets or realtime database. We found realtime database would be more efficient.
## Accomplishments that we're proud of
We were successfully able to implement whatever we planned and web app working smoothly without any bugs. Also now we are trying to deploy to make available for everyone
## What we learned
We learned many things like how to use react in efficient way, using flask but most important was the use of Twilio Whatsapp service which is simple to integrate.
## What's next for Shhh...Top Secret
We are planning to use face recognition feature, sending media files and also roles like admin, members to the user of messaging app
