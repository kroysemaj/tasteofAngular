#Filters

![Cinderella](http://cdn.mamamia.com.au/wp/wp-content/uploads/2015/05/Tumblr_static_cinderella_dress_transformation_gif.gif)

###Filters take data that is bound to a view and transform it some way.
Angular comes with a number of built in filters to handle some of the most common tasks

### Examples

To use a built in filter, simple use a pipe `|` after your data bound expression in the curly braces

`{{ expression | filter }}`

Open [4-filter.html](http://apprend.github.io/tasteofAngular/workshop/4-filter.html) in your code editor *and* web browser

### uppercase

In the first example, notice that we use the `uppercase` filter which, unsurprisingly, transforms the string values to all caps regardless of how they are stored in the array. There is a similar filter for lowercase.

### orderBy : expression

In the second example, we can apply the filter `orderBy: member` to our `{{ member }}` expression. This transforms the order of the array based on an expression. If that expression is a property then it will order the elements alphabetically.

We can also specify ascending or descending order by prepending the `+` or `-` operators to the expression. Note that you have to wrap the expression in quotes when you add these operators.

### filter : expression

You can also implement a very simple in-client search on more complex objects. Here we have a collection of objects with two properties. When we add the `filter : membersNameOrInstrument` we can perform a fuzzy search on the object.

In this case, we are filtering based on an `ng-model=membersNameOrInstrument` which is data bound to the text input. Try typing in the text input. It will instantly filter the object based on what's in the text field. By default, the filter is a fuzzy search but it can be adapted to filter on specific properties.

### limitTo

As a bonus, we can limit the number of elements that are displayed in our `ng-repeat` by using the `limitTo` filter. Passing a number to this filter will limit the array to that many.
