select count("cities".*) as "citiesInCountry",
    "countries"."name" as "Country"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId"
  order by "Country";
