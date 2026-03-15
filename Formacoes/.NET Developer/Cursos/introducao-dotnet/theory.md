## Lesson 1 - Introduction to .NET

### .NET is a unified development platform that allows the construction of systems and applications

  C# is a programming language used in .NET, it is part of the .NET environment, but is not the only .NET's language.

  .NET was created and is maintained by Microsoft. It is an open source developer platform, created by Microsoft, for
  building many different types of applications. This means that we must have in mind that it is not a programming language
  itself, but a development platform. For example

  WEB - ASP.NET
  Desktop - WPF, Windows Forms, UWP
  Cloud - Azure
  Mobile - Xamarin
  Gaming - Unity
  IoT - ARM32, ARM64
  AI - ML.NET, .NET for Apache Spark.

  The tools consist of: Visual Studio, Visual Studio for Mac, Visual Studio Code, Command Line Interface

  It is a development platform and we don't need to understand what happens behind the scenes, it gives us solution and
   "prepares the terrain" so we don't worry about implementing a solution from scratch. Take an API as example, it uses
  the web part of .NET and provide us tools. We only need to worry about the code.

  Therefore, it consists of runtime components/compilers/languages.

  And the languages is where the C# fits in.

  This means that, if someone says that they are a .NET developer, it does not necessarily mean that the person knows
  about every of these things, but the person must understand that .NET provides solutions for multiple types of applications
  that the person might develop.

### .NET Languages

.NET essentially works with: C#, F#, or Visual Basic.

Assume we want to develop a Web API. In this case, we will use the .NET library, using the C# language. In other words,
C# provides what we need/want to build, and .NET will be the way we build. We use one of those three languages to transform
our solution into reality.

### Cross Platform

Whether we are working in C#, F# or VB, our code will run natively on any compatible OS. Different .NET implementations
handle he heavy lifting for us.

● .NET is a cross-platform .NET implementation for websites, servers and console apps on Windows, Linux, and macOS
● .NET Framework supports websites, services, desktop apps, and more on Windows
● Xamarin/Mono is a .NET implementation for running apps on all the major mobile operating systems.

### Libraries

To extend functionality, Microsoft and others maintain a healthy package ecosystem built on .NET Standard.

**NuGet** is a package manager built specifically for .NET that contains over 90.000 packages. Inside NuGet we can add
our packages, download our packages. Probably, when we build a solution, we may use a package from the .NET platform
itself, be the base implementation or another, from the microsoft or a third party library

## Lesson 2 - Beginning of .NET

### History of .NET

Microsoft started working on C# in the late 90s, releasing its first framework version in 2002, with the goal of competing
with Java.

The multi-platform concept was "thunderous" at that time. Because for the software to be executed in other platform, we
basically would have to re-write the code as whole. And not only this, to worry about the specific implementations for each
platform. So basically, if we had a windows program, and we would like it to run on linux, the code should be written from
scratch.

And on that time, we could write a code in Java and it would run either on Linux, or windows, with no major problems.

Microsoft, wanted to "join that wave", and started to port java to windows. Creating a version very near to java, using
java, modifying it, specifically to run on windows with multiple improvements. Basically it got Java code and made its
improvements so it could run on windows and scale its platform.

With this, it started causing some issues to MS, because it started modifying Java, and it wasn't respecting the implementations
and Java rules. Legally speaking, it didn't have enough permission to modify the language and create a new implementation.
This lead to lawsuits from the company that maintained Java towards microsoft.  

With this, microsoft lost this case, and was forced to discontinue its Java implementation. And with this, the .NET
idea arose. .NET framework used some Java concepts, but different from Java, .NET did not came up with the idea of
running in any place. But to facilitate apps development for Windows.

 .NET used multiple concepts of Java, but specifically for windows. It did not came up with the multi-platform concept,
 and was coupled to windows. It worked only on windows.

## Lesson 3 - Differences between .NET Framework (legacy) and .NET

### .NET Framework

Legacy version, only works in windows. It is integrated with windows.

We have some examples of applications we can write on the framework. The main ones are Windows Forms, which are the
screens we are used to see, ASP.NET that is its web part, and WPF where we can develop applications for windows.

### .NET

This version is the current version and was practically rewritten from scratch. It was made with the mentality of working
in multi-platforms, meaning that it will execute either on windows, linux or iOS. Without having to rewrite the code.

The difference between platforms exist. For example, in windows we have our user documents folder, in linux we have the
user's /home, and the challenges we may face is normally these kind of stuff. How to access a file, the permissions, but
the code itself, already works in a way easier manner to be executed.

.NET also has the `.NET Native` that consist of windows native apps. Like the ones we find on the store.

### Shared

We have the Runtime components, libraries, and compiler s (.NET Compiler (Roslyn Languages Innovation)) that are shared
across both of them.

### Multi-platform key benefits

1. The main benefit, which are the server costs, that are way cheaper on platforms like Linux. Because in windows platforms,
besides acquiring the server, we also need its license, which mainly for servers, is very expensive

2. Easy of developing to multiple systems










