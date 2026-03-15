## Lesson 1 - Understanding what is logic

If we can't think/find a solution for a given problem. Knowing commands or syntax of a programming languages, is almost
useless.

For example, we have to create a program that shows to a given student what is its arithmetical average based on 4 grades
that were uploaded to a system. If we don't know what operations we are going to need, it is no use understanding computer
codes.

It's important to know which abilities we will need in order to give that result to an user. Therefore, this code will
be used to improve our logic and abilities to develop systems. Multiple times, we should not go directly to the code. First
we need to know, and understand what we are going to code. This is a common mistake, many times programmers go directly
into the code, to only then, think of the logic that will be applied.

### What is logic?

Logic is essentially the coherence of reasoning. It is a coherent sequence, regular and necessary of events and things.

As an example, let's take the number 10. We know that the number 10 is bigger than 9 and consequently, 9 is smaller than
10

Other example would be crossing the road. Our coherent sequence would be. We stop, look at both sides, if no car are coming,
and we have time to cross it by walking, we cross. Those are a sequence of steps we needed.

### Programming logic

Programming logic only means to contextualize the logic in the programming. Looking forward to improve the sequence of actions
in order to solve a problem. This sequence of information is called "algorithm".

### Metacognition

Metacognition is thinking how we think.

For example. We have a problem that we need to buy 2 shirts. We went to a store and found out that the shirt costs 50
brl, meaning that its sum, is 50 + 50 that is equal to 100. But the sales woman said that by buying two shits, we have
a discount of 20%. So we think, by knowing all this, how much discount will will have?

If we don't know how to make a percentage calculus, we wouldn't be able to solve this. it would be an algorithm like this

  ```ts
  const originalPrice = 50
  const discountPercentage = 20

  const discount = 1 - (discountPercentage / 100)  // discount = 1 - (20 - 100) = 1 - 80 = 0.20
  const finalPrice = originalPrice * discount

  // In this example we used how much is left of the price,

  // or

  const finalValue = originalPrice - (originalPrice * (discountPercentage / 100))

  // And here we calculate the discount (value that is going to be taken off) and subtracts   from the original value
  ```

## Lesson 2 - Algorithms and Pseudocode

### Algorithms

Algorithms are a sequence of steps that solve a certain problem. Like

Begin-Day
  Woke-Up
  Got off of bed
  Changed clothes
  Brushed the teeth
  Went to the bakery
  Had breakfast
  Brushed the teeth
  Went to work
  ...
End-Day

And by sequence we can understand that. In order for a step to be able to happen, others might have to happen before
It isn't possible to go to the bakery if we didn't get up from bed, or to have breakfast without going to the bakery,
and so on.

It is important that this order is respected and if we modify that order, some problem may appear.









