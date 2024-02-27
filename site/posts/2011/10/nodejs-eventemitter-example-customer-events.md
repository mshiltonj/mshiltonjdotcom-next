---
title: Nodejs EventEmitter Example With Custom Events
published: 2011-10-04
---

A good example of an event emitter needs three things:

* A thing that emits events
* A thing that listens to, and handles, those events
* Something that drives the two, causing events to be emitted.

Using node v0.4.11-pre, here is a small example illustrating custom event handling using EventEmitter.

<!--- break -->

We need two modules from node:

    var events = require('events');
    var util = require('util');

The events module contains the EventEmitter class, which does all the heavy lifting for us. The util package provides a convenient way to have one class inherit from another. One of our classes will inherit functionality from EventEmitter. Let’s look at that one now.

    Eventer = function(){
      events.EventEmitter.call(this);
      this.kapow = function(){
        var data = "BATMAN"
        this.emit('blamo', data);
      }

      this.bam = function(){
        this.emit("boom");
      }
    };
    util.inherits(Eventer, events.EventEmitter);

Here we define an Event class that inherits from EventEmitter. Inside the kapow() method, we emit the "blamo" event, and inside the bam() method, we emit the "boom" event. When we emit the "blamo" event, we pass some data along with the event. If anything is listening to the "blamo" event, they will get the data parameter. The "boom" event doesn’t have any associated data. The emit() method provided by EventEmitter.

By themselves, the events happen, but they don’t actually do anything. Something else needs to listen for those events and do something with them. That’s an event listener:

    Listener = function(){
      this.blamoHandler =  function(data){
        console.log("** blamo event handled");
        console.log(data);
      },
      this.boomHandler = function(){
        console.log("** boom event handled");
      }
    };

Our Listener class defines our handlers for the two events in the Eventer class. They’re just normal methods that may or may not have parameters. We can do anything we like inside these methods – do an ajax request to the server, show an alert to the user, hide an html element, etc. In our example, we’re just writing to the console.

But our listener is just sitting there. It’s not listening to anything yet. To make that happen, we have to let our eventer know we ready to accept events.

    var eventer = new Eventer();
    var listener = new Listener(eventer);
    eventer.on('blamo', listener.blamoHandler);
    eventer.on('boom', listener.boomHandler);

We create one Eventer object and one Listener object. Then we wire the two together with the on() method in our eventer object. This tells the eventer to call the listener.blamoHandler function whenever the "blamo" event get emitted, and to call the listener.boomHandler function whenever the "boom" event get emitted.

Our example has only one handler per event, but we could add two, three or a hundred different handlers for a single ‘blamo’ event, and each function would be called separately.

We now have an eventer that will emit events, a listener that will handle events, and we’ve set up the relationship so that the listener is listening to the eventer’s events. The last thing we need is to just fire the events!

  eventer.kapow();
  eventer.bam();

If you look how we defined these methods above, you’ll see that whenever the kapow() method is called, it will emit the "blamo" event, which will trigger the "blamoHandler" function on the listener class, and pass the "data" parameter along with with it. Whenever the bam() method is called, it will emit the "boom" event, which with trigger the "boomHandler" function on the listener class.

And that’s it. We now have a complete example of custom event handling in nodejs.

## Warning

This post didn’t address scoping issues. In the event handlers, the this object might not be what you expect. Event handling with proper scoping may be covered in a later post.

## Complete Code Example

Here is a complete code example with sample output:

    var events = require('events');
    var util = require('util');

    // The Thing That Emits Event
    Eventer = function(){
      events.EventEmitter.call(this);
      this.kapow = function(){
        var data = "BATMAN"
        this.emit('blamo', data);
      }

      this.bam = function(){
        this.emit("boom");
      }
    };
    util.inherits(Eventer, events.EventEmitter);

    // The thing that listens to, and handles, those events
    Listener = function(){
      this.blamoHandler =  function(data){
        console.log("** blamo event handled");
        console.log(data);
      },
      this.boomHandler = function(data){
        console.log("** boom event handled");
      }

    };

    // The thing that drives the two.
    var eventer = new Eventer();
    var listener = new Listener(eventer);
    eventer.on('blamo', listener.blamoHandler);
    eventer.on('boom', listener.boomHandler);

    eventer.kapow();
    eventer.bam();

Copy and past this text into an example.js file. Then, run it from the command line:

node example.js

This should be your output:

    ** blamo event handled
    BATMAN
    ** boom event handled

Thanks for reading!
