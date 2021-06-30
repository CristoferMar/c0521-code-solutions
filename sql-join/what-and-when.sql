select "films"."releaseYear",  "categories"."name" as "Category"
from "filmCategory"
join "films" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie';
