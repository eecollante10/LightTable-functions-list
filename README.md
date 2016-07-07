# LightTable-functions-list
Shows javascript functions on the right panel. Click on a function to go to it. To access it, search function in the commands panel (ctrl-space)

![screenshot](assets/sino.png)

###Key Binding
Open the functions list by using a shortcut  
1. Open your user.keymap file. You can search for it on the commands (ctrl-space). Type keymap  
2. Add the following to your user.keymap  [:app "cmd-shift-m" :functions-list.show]  
3. You can change "cmd-shift-m" to whatever keys you want

###Customizing
The plugin source code uses a regular expression to find the 'function' keyword.  
So you can edit that regular expression to find another keyword.  
That source code file is in src/lt/plugins

