# Objective
In this assignment, we will start using the foundation we lay in A1 and make our timers fully functional. Each timer will function as described in A1 and the user flow should be the following:

- User opens the application
- Select a type of timer (Stopwatch, Countdown, XY, TABATA)

- Configure timer based on type (time, rounds, work/rest, etc)

- Run timer. While running, user should be able to:
  - Pause/Resume
  - When paused, user can reset back to initial state
  - Ability to "fast forward" (ends the timer)

- When timer is complete, you can decide how to congratulate the user and allow them to start over or select a different timer

## Deliverable

- Convert all classes components that you have added to functional components. You are welcome to convert all components (including ones added by us), but this is not required.
- Get all timers functional
- Application state should be managed with context. That is, timers should NOT track time, rounds, etc, locally or pass it down to its children
- Make sure that you can switch between timers without breaking the app (e.g. I should not have to refresh in order to run another timer after a run has been completed)
- Update documentation as your components change. 
- Your application must be deployed and the link pasted somewhere in this README

### Deployment Instructions (GH actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Grading Rubric 
- All components you have added are functional components
- All timers are functioning properly 
- Timers can be run one after another and it should not break the application
- Application state is managed with context
- DRY (do not repeat yourself). we should not see the same code copy pasted all over the codebase. 
- Console is free of warnings/errors

## Bonus
For people looking for an additional challenge, we have provided some bonus features that you can implement. These are not required! You can still get a 100% on the assignment without them.
- Before the timer starts, have a 10-second countdown to give user time to prepare (3pt)
- User settings
  - custom number of seconds before the timer starts (1pt)
  - configurable audio notifications (3-2-1-GO, halfway, 1 minute left, last round, beep every minute, etc) (1pt)
- Persisting state so refreshing the page does not clear application state. (2pt) 

## Installing and Running the project

As you have noticed this repository is empty. To begin this assignment you must copy over all of our files from A1 into this repo. I recommend not copying over `node_modules` and instead re-install here. You can then commit and deploy as usual from this repo.



## Notes & References
I used a bunch of extra libraries and assets:

**Art & Sound:**
- Background Image by Maarten van den Heuvel @ [unsplash](https://unsplash.com/@mvdheuvel)
- Alarm sounds from [mixkit](https://mixkit.co/free-sound-effects/alarm/)
- Iconography from [fontawesome](https://fontawesome.com/)

**Libraries & Re-used Code:**
- Use sound npm package/react hook by [Josh Comeau](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)
- UseInterval react hook by [Dan Abramov](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
- UsePersistedState react hook by [Prof Tejera](https://github.com/prof-tejera/react7/blob/main/src/hooks.js)

**References, Research, & Inspiration:**
I got a bunch of ideas for how to construct a clean data model and solve various implementation problems from the following sources:
- https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript
- https://stackoverflow.com/questions/13802587/how-can-i-convert-a-hhmmss-string-to-a-javascript-date-object
- https://stackoverflow.com/questions/51145692/styled-component-not-taking-props
- https://stackoverflow.com/questions/51770246/how-to-validate-numeric-inputs-in-reactjs
- https://stackoverflow.com/questions/55763957/how-to-clean-up-setinterval-in-useeffect-using-react-hooks/55764160
- https://stackoverflow.com/questions/53859601/how-do-i-clearinterval-on-click-with-react-hooks/55659592
- https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount
- https://medium.com/bb-tutorials-and-thoughts/how-to-create-a-countdown-timer-in-react-app-e99916046292
- https://javascript.plainenglish.io/this-is-how-i-created-a-countdown-timer-app-in-react-3644afbaabf6
- FontAwesome documentation
- React documentation
- MDN web documentation (Javascript)

## Assignment Link
[https://prof-tejera.github.io/assignment-2-Bianca-Morris/](https://prof-tejera.github.io/assignment-2-Bianca-Morris/)