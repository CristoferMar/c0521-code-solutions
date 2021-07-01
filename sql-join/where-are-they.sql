select "a"."line1",  "c"."name" as "city", "a"."district", "countries"."name" as "country"
from "cities" as "c"
join "addresses" as "a" using ("cityId")
join "countries" using ("countryId");
