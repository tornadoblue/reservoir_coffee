CREATE VIEW public.business_status AS
 SELECT dateinfo."current_date",
    bh.day AS today,
        CASE
            WHEN ((bc.* IS NULL) AND (dateinfo."time" > bh.start) AND (dateinfo."time" < bh."end")) THEN 'open'::text
            ELSE 'closed'::text
        END AS status,
    bc.description AS closed_reason,
    bh.start AS opens,
    bh."end" AS closes
   FROM ((( SELECT btrim(to_char(timezone('pst'::text, now()), 'Day'::text)) AS weekday,
            timezone('pst'::text, CURRENT_TIME) AS "time",
            timezone('pst'::text, now()) AS "current_date") dateinfo
     JOIN public.business_hours bh ON ((bh.day = dateinfo.weekday)))
     LEFT JOIN public.business_closures bc ON (((dateinfo."current_date" > bc.start_date) AND (dateinfo."current_date" < (
        CASE
            WHEN (bc.end_date IS NULL) THEN bc.start_date
            ELSE bc.end_date
        END + '1 day'::interval)))))
  WHERE (dateinfo.weekday = bh.day);

