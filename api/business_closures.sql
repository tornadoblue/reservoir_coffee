CREATE TABLE public.business_closures (
    id integer NOT NULL,
    description text,
    start_date date NOT NULL,
    end_date date
);


ALTER TABLE public.business_closures OWNER TO postgres;

--
-- Name: TABLE business_closures; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.business_closures IS 'Public holidays and other days the business will be closed';


--
-- Name: business_closures_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.business_closures_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.business_closures_id_seq OWNER TO postgres;

--
-- Name: business_closures_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.business_closures_id_seq OWNED BY public.business_closures.id;


--
-- Name: business_closures id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.business_closures ALTER COLUMN id SET DEFAULT nextval('public.business_closures_id_seq'::regclass);


--
-- Name: business_closures business_closures_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.business_closures
    ADD CONSTRAINT business_closures_pkey PRIMARY KEY (id);


--
-- Data for Name: business_closures; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.business_closures VALUES (1, 'Christmas break', '2021-12-24', '2022-01-04');