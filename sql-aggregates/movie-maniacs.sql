select "c"."firstName",
    "c"."lastName",
    sum("p"."amount") as "Total paid"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  group by "c"."customerId"
  order by "Total paid" desc;
