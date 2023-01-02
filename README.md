This is a Food Order App I created using React with css styling. And, it's my First Project.
Actually, I did this as a part of learning React Course on Udemy provided by Maximilian Schwarzmüller.
But, this is my own code and I have not copied or referred the Instructor's solution except for bumping/highlighting just a Cart button while adding/removing items.
And, my code is much different from the Instructor's solution as I had gone through his code afterwards which he has provided only as a Video lecture and not shared as code from which someone can copy directly.

**Project Details:**
In this App, we can see a Menu with 4 dishes where we can add the desired quantity for each item to the Cart. The Menu is actually fetched from a backend (Firebase) and won't be loaded without Internet connection. An in such a case, an error message will be displayed.
The Cart can be viewed and hidden on clicking the relevant buttons. On the Cart, we can see the added items, if any , price and the total Order Price.
We can increase/reduce the quantity of each Items on Cart and if the quantity of an item is reduced to 0, it gets removed from the Cart.
And Finally, we can hit the Order button which displays a Form for the Name & Address of the User. There also will be shown 2 buttons, one for cancelling the Order and the other for Placing the order. Cancelling the Order clears the Cart and hides the Cart Modal. Placing the Order sends the User Address and the Order Items to Firebase and store it there in an Object named OrderUsers.

For this Project, I have created a number of seperate files for the Components and a Context File where new items can be added, existing items' quantity can be increased/decreased, and return a Context Provider with 7 values:
1. Cart (array)
2. updateCart (function)
3. onCartClick (function for showing/hiding Cart Modal)
4. isCartDisplayed (boolean)
5. reduceAmount and 6. addAmount (for reducing/increasing quantity).
6. status (boolean for necessary rerender of the Cart button on change in number of Items).
