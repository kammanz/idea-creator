# Idea Creator

## An app for creating, saving and updating your ideas. Built with React and Typescript.

## Install

git clone https://github.com/kammanz/idea-creator.

Yarn start

## Assumptions and Decisions

List Sorting:

Conditional sort functionality based on whether there are more than 2 items in the list

In version 2, I'd add a feature that allows the user to distinguish between searching by 'date created' and 'date updated.'

Cursor Focus:

Cursor focusses on the new idea field after the page loads and after a new idea is created (as per instructions). However, after a user updates an idea, I've removed this functionality, which would make the page scroll back to top while the user is potentially reading their idea's description.

Accessibility:

A current labeling convention sets the input titles as placeholders. I've used the older of method of using label tags, as it's easier to navigate for accessibility users.
