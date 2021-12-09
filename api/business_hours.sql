CREATE TABLE public.business_hours (
    id integer NOT NULL,
    day text NOT NULL,
    start time with time zone,
    "end" time with time zone
);



ALTER TABLE public.business_hours OWNER TO postgres;

--
-- Name: business_hours_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.business_hours_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.business_hours_id_seq OWNER TO postgres;

--
-- Name: business_hours_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.business_hours_id_seq OWNED BY public.business_hours.id;


--
-- Name: business_hours id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.business_hours ALTER COLUMN id SET DEFAULT nextval('public.business_hours_id_seq'::regclass);


--
-- Name: business_hours business_hours_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.business_hours
    ADD CONSTRAINT business_hours_pkey PRIMARY KEY (id);


    --
-- Data for Name: business_hours; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.business_hours VALUES (1, 'Sunday', NULL, NULL);
INSERT INTO public.business_hours VALUES (2, 'Monday', '08:00:00-08', '16:00:00-08');
INSERT INTO public.business_hours VALUES (3, 'Tuesday', '08:00:00-08', '16:00:00-08');
INSERT INTO public.business_hours VALUES (6, 'Friday', '08:00:00-08', '16:00:00-08');
INSERT INTO public.business_hours VALUES (5, 'Thursday', '08:00:00-08', '16:00:00-08');
INSERT INTO public.business_hours VALUES (4, 'Wednesday', '08:00:00-08', '16:00:00-08');
INSERT INTO public.business_hours VALUES (7, 'Saturday', '09:00:00-08', '16:00:00-08');