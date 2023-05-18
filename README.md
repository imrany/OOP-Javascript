# OOP with Javascript
JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP).

In this tutorial, I'll explain OOP and show you how to use it.

According to Wikipedia, class-based programming is

a style of Object-oriented programming (OOP) in which inheritance occurs via defining classes of objects, instead of inheritance occurring via the objects alone

The most popular model of OOP is class-based.

But as I mentioned, JavaScript isn't a classed-based langauge – it's is a prototype-based langauge.

According to Mozilla's documentaion:

A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object.


# Subclassing
This is a feature in OOP where a class inherits features from a parent class but possesses extra features which the parent doesn't.

The idea here is, for example, say you want to create a cats class. Instead of creating the class from scratch - stating the name, age and species property afresh, you'd inherit those properties from the parent animals class.

This cats class can then have extra properties like color of whiskers.

Let's see how subclasses are done with class.


# Wrapping Up
JavaScript leverages its prototype nature to welcome OOP developers to its ecosystem. It also provides easy ways to creating prototypes and organize related data.

True OOP languages do not perform prototyping in the background - just take note of that.