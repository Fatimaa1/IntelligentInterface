if (annyang) {
    // Let's define a command.
    console.log("connected");
    var commands = {
      'hello': function() { alert('Hello world!'); }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
  }