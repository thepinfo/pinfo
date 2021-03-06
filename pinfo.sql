--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: images; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.images (
    id integer NOT NULL,
    username character(50) NOT NULL,
    userid integer NOT NULL,
    loc character varying(200) NOT NULL,
    submitted date NOT NULL,
    title character varying(200),
    name character varying(200),
    pinid integer,
    artist character varying(200),
    variant character varying(200),
    year smallint,
    colorway character varying(200),
    glow integer,
    uv integer,
    thisle integer,
    producer character varying(200),
    maxno integer,
    pinno integer
);


--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: login; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.login (
    id integer NOT NULL,
    hash character varying(100) NOT NULL,
    email text NOT NULL
);


--
-- Name: login_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.login_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: login_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.login_id_seq OWNED BY public.login.id;


--
-- Name: pins; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pins (
    id integer NOT NULL,
    name character varying(100),
    artist character varying(100),
    producer character varying(100),
    year character varying(100),
    variant character varying(100),
    pinno character varying(100),
    maxno character varying(100),
    glow character varying(100),
    uv character varying(100),
    file character varying(100),
    userid integer,
    filename character varying(200),
    imgname character varying(200),
    categories text,
    glowimgname character varying(100),
    uvimgname character varying(100),
    mine character varying(100) DEFAULT 'on'::character varying,
    about text
);


--
-- Name: pins_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pins_id_seq OWNED BY public.pins.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100),
    email text NOT NULL,
    entries bigint DEFAULT 0,
    joined character varying(100)
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: login id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.login ALTER COLUMN id SET DEFAULT nextval('public.login_id_seq'::regclass);


--
-- Name: pins id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pins ALTER COLUMN id SET DEFAULT nextval('public.pins_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.images (id, username, userid, loc, submitted, title, name, pinid, artist, variant, year, colorway, glow, uv, thisle, producer, maxno, pinno) FROM stdin;
\.


--
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.login (id, hash, email) FROM stdin;
2	$2a$10$qYCB5kXtnu3PW8OxowLpPuHVAV7Zt9pqMAM8hvnoSKmlbOgQRN8VS	joyin@gmail.com
3	$2a$10$87j1FIfr2r2hkRh74KWsv.psF6Druiv3WLhsuehpXzvvfgAAf.EL2	joyin1@gmail.com
4	$2a$10$TJNWfJqE5xO.cmvJNiVayOLLLWMtve3JvsZI8QlZt09HTrJKdX5lG	test@gmail.com
5	$2a$10$ShDqqWaI6Wc7oGAFbI3w.eEaTQynjDfstZs97skM34YZ3hpelShyq	test2@gmail.com
7	$2a$10$NRld1lpVjH0mX0mm6nXz2eGCbGBOvWoklihCp9WEaOg083qoIhfPu	1
8	$2a$10$eIuxytvUMC9ZGlJapJeQYOilQ9EAZ2RnBHU6YfXivV/FdntblDqHy	2
9	$2a$10$6LPdn0OvTFKQHCl53re6KutN.oAw1DD4Dlxb.10Hs85.meThy8vrG	Tek@Tek.com
10	$2a$10$fBpxP8IktiSwJbE5CwNCkOf8V1TRvzCWs8zlVl0.eURGVqLV2utDi	testreal@gmail.com
\.


--
-- Data for Name: pins; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.pins (id, name, artist, producer, year, variant, pinno, maxno, glow, uv, file, userid, filename, imgname, categories, glowimgname, uvimgname, mine, about) FROM stdin;
1	1	2	3	4	5	1	2			\N	\N	\N	\N	\N	\N	\N	on	\N
2	1	2	3	4	5	1	2			\N	\N	\N	\N	\N	\N	\N	on	\N
3	1	2	3	4	5	1	2			\N	\N	\N	\N	\N	\N	\N	on	\N
4										\N	\N	\N	\N	\N	\N	\N	on	\N
5										\N	\N	\N	\N	\N	\N	\N	on	\N
6										\N	\N	\N	\N	\N	\N	\N	on	\N
7										\N	\N	\N	\N	\N	\N	\N	on	\N
8										\N	\N	\N	\N	\N	\N	\N	on	\N
9										\N	\N	\N	\N	\N	\N	\N	on	\N
10										\N	\N	\N	\N	\N	\N	\N	on	\N
11										\N	\N	\N	\N	\N	\N	\N	on	\N
12										\N	\N	\N	\N	\N	\N	\N	on	\N
13										\N	\N	\N	\N	\N	\N	\N	on	\N
14										\N	\N	\N	\N	\N	\N	\N	on	\N
15										\N	\N	\N	\N	\N	\N	\N	on	\N
16										\N	\N	\N	\N	\N	\N	\N	on	\N
17										\N	\N	\N	\N	\N	\N	\N	on	\N
18										\N	\N	\N	\N	\N	\N	\N	on	\N
19										\N	\N	\N	\N	\N	\N	\N	on	\N
20										\N	\N	\N	\N	\N	\N	\N	on	\N
21										\N	\N	\N	\N	\N	\N	\N	on	\N
22										\N	\N	\N	\N	\N	\N	\N	on	\N
23										\N	\N	\N	\N	\N	\N	\N	on	\N
24										\N	\N	\N	\N	\N	\N	\N	on	\N
25										\N	\N	\N	\N	\N	\N	\N	on	\N
26										\N	\N	\N	\N	\N	\N	\N	on	\N
27										\N	\N	\N	\N	\N	\N	\N	on	\N
28										\N	\N	\N	\N	\N	\N	\N	on	\N
29										\N	\N	\N	\N	\N	\N	\N	on	\N
30										\N	\N	\N	\N	\N	\N	\N	on	\N
31										\N	\N	\N	\N	\N	\N	\N	on	\N
32										\N	\N	\N	\N	\N	\N	\N	on	\N
33	2	1	3	4	5					\N	\N	\N	\N	\N	\N	\N	on	\N
34										\N	\N	\N	\N	\N	\N	\N	on	\N
35										\N	\N	\N	\N	\N	\N	\N	on	\N
36										\N	\N	\N	\N	\N	\N	\N	on	\N
37										\N	\N	\N	\N	\N	\N	\N	on	\N
38										\N	\N	\N	\N	\N	\N	\N	on	\N
39										\N	\N	\N	\N	\N	\N	\N	on	\N
40										\N	\N	\N	\N	\N	\N	\N	on	\N
41										\N	\N	\N	\N	\N	\N	\N	on	\N
42										\N	\N	\N	\N	\N	\N	\N	on	\N
43										\N	\N	\N	\N	\N	\N	\N	on	\N
44										\N	\N	\N	\N	\N	\N	\N	on	\N
45										\N	\N	\N	\N	\N	\N	\N	on	\N
46										\N	\N	\N	\N	\N	\N	\N	on	\N
47										\N	\N	\N	\N	\N	\N	\N	on	\N
48										\N	\N	\N	\N	\N	\N	\N	on	\N
49										\N	\N	\N	\N	\N	\N	\N	on	\N
50										\N	\N	\N	\N	\N	\N	\N	on	\N
51										\N	\N	\N	\N	\N	\N	\N	on	\N
52										\N	\N	\N	\N	\N	\N	\N	on	\N
53										\N	\N	\N	\N	\N	\N	\N	on	\N
54										\N	\N	\N	\N	\N	\N	\N	on	\N
55										\N	12	\N	12-1525364999670	\N	\N	\N	on	\N
56										\N	12	\N	12-1525365379092	\N	\N	\N	on	\N
57										\N	12	\N	12-1525365380792	\N	\N	\N	on	\N
58										\N	12	\N	12-1525365382052	\N	\N	\N	on	\N
59										\N	12	\N	12-1525365380792	\N	\N	\N	on	\N
60										\N	12	\N	12-1525365382052	\N	\N	\N	on	\N
61										\N	12	\N	12-1525366271964	\N	\N	\N	on	\N
62										\N	12	\N	12-1525366367341	\N	\N	\N	on	\N
63										\N	12	\N	12-1525366430171	\N	\N	\N	on	\N
64										\N	12	\N	12-1525366463576	\N	\N	\N	on	\N
65										\N	12	\N	12-1525366486842	\N	\N	\N	on	\N
66										\N	12	\N	12-1525366527638	\N	\N	\N	on	\N
67										\N	12	\N	12-1525366535026	\N	\N	\N	on	\N
68										\N	12	\N	12-1525366535026	\N	\N	\N	on	\N
69										\N	12	\N	12-1525366757403	\N	\N	\N	on	\N
70										\N	12	\N	12-1525366897268	\N	\N	\N	on	\N
71										\N	12	\N	12-1525366903497	\N	\N	\N	on	\N
72										\N	12	\N	12-1525367801977	{"{\\"tagtype\\":\\"character\\",\\"text\\":\\"1\\",\\"key\\":1525367757190}","{\\"tagtype\\":\\"musical\\",\\"text\\":\\"33\\",\\"key\\":1525367759123}","{\\"tagtype\\":\\"cultural\\",\\"text\\":\\"4\\",\\"key\\":1525367761056}"}	\N	\N	on	\N
73										\N	12	\N	12-1525367801977	{"{\\"tagtype\\":\\"character\\",\\"text\\":\\"1\\",\\"key\\":1525367757190}","{\\"tagtype\\":\\"musical\\",\\"text\\":\\"33\\",\\"key\\":1525367759123}","{\\"tagtype\\":\\"cultural\\",\\"text\\":\\"4\\",\\"key\\":1525367761056}"}	\N	\N	on	\N
74										\N	12	\N	12-1525369574580	{}	\N	\N	on	\N
75										\N	12	\N	12-1525369622565	{}	\N	\N	on	\N
76										\N	12	\N	12-1525369674334	{}	\N	\N	on	\N
77										\N	12	\N	12-1525369691720	{}	\N	\N	on	\N
78										\N	12	\N	12-1525369715454	{}	\N	\N	on	\N
79								on	on	\N	12	\N	12-1525378306972	{}	\N	\N	on	\N
80								on	on	\N	12	\N	12-1525378593012	{}	\N	\N	on	\N
84										\N	13	\N	13-1525383549703	{}	13-glow-1525383549703	13-uv-1525383549703	on	\N
81								on	on	\N	12	\N	12-1525378746653	{}	12-glow-1525378746653	12-uv-1525378746653	on	\N
82								on	on	\N	12	\N	12-1525378712250	{}	12-glow-1525378712250	12-uv-1525378712250	on	\N
83								on	on	\N	12	\N	12-1525378952852	{}	12-glow-1525378952852	12-uv-1525378952852	on	\N
85	The One	Me								\N	14	\N	14-1525459436361	{}	14-glow-1525459436361	14-uv-1525459436361	on	\N
86								on		\N	12	\N	12-1525479693435	{}	12-glow-1525479693435	12-uv-1525479693435	on	\N
87	kev							on		\N	12	\N	12-1525479704180	{"{\\"tagtype\\":\\"character\\",\\"text\\":\\"kev\\",\\"key\\":1525479689954}"}	12-glow-1525479704180	12-uv-1525479704180	on	\N
88	Cosmic Love	Austen Zaleski	The Artistry Collection	2018	Blue/red		125			\N	15	\N	15-1525535348003	{}	15-glow-1525535348003	15-uv-1525535348003	on	\N
89										\N	12	\N	12-1525535611037	{}	12-glow-1525535611037	12-uv-1525535611037	on	\N
90										\N	12	\N	12-1525535871633	{}	12-glow-1525535871633	12-uv-1525535871633	on	\N
91										\N	12	\N	12-1525536133699	{}	12-glow-1525536133699	12-uv-1525536133699	on	\N
92										\N	12	\N	12-1525536273365	{}	12-glow-1525536273365	12-uv-1525536273365	on	\N
93										\N	12	\N	12-1525536273365	{}	12-glow-1525536273365	12-uv-1525536273365	on	\N
94										\N	12	\N	12-1525557484393	{}	12-glow-1525557484393	12-uv-1525557484393	on	This pin is a very special thing to me blah blah blah
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, name, email, entries, joined) FROM stdin;
3	joyi	joyi@gmail.com	0	2018-04-26T10:08:00.069-05:00
6	tek	tek@gmail.com	0	2018-04-26T10:13:13.730-05:00
1	joy	joy@gmail.com	4	2018-04-26T09:59:23.556-05:00
8	joyin	{"joyin@gmail.com"}	0	2018-04-26T15:01:50.419-05:00
9	joyin1	joyin1@gmail.com	0	2018-04-26T15:02:54.882-05:00
11	test1	test2@gmail.com	7	2018-04-26T16:03:01.147-05:00
10	test	test@gmail.com	5	2018-04-26T15:13:51.191-05:00
12	1	1	0	2018-04-27T08:03:31.490-05:00
13	2	2	0	2018-05-03T16:38:39.523-05:00
14	Tek	Tek@Tek.com	0	2018-05-04T13:41:37.328-05:00
15	Test	testreal@gmail.com	0	2018-05-05T09:57:37.899-05:00
\.


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.images_id_seq', 1, false);


--
-- Name: login_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.login_id_seq', 10, true);


--
-- Name: pins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pins_id_seq', 94, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 15, true);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: login login_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_email_key UNIQUE (email);


--
-- Name: login login_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY (id);


--
-- Name: pins pins_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pins
    ADD CONSTRAINT pins_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

