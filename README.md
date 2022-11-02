# Idea Creator

## An app for creating, saving and updating your ideas. Built with React and Typescript.

## Install

git clone https://github.com/kammanz/idea-creator.

Yarn start

## Assumptions and Decisions

List Sorting:

Conditional sort functionality based on whether there are more than 2 items in the list

Cursor Focus:

As per instructions, cursor is focussed on new idea field on page load, and after new idea creation. However, after a user updates an idea, I would not have any focus, as that would make the page scroll back to top. The user may want to look at their idea read the description, and a page scroll to top would be distracting.
