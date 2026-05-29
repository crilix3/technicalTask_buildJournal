--
-- PostgreSQL database dump
--

\restrict lk1phsRsKBseTLVJDcU2wpbPawWvkSiVVirz08NMeTjJ1x7Rvt79OkcQdSuDM0V

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-29 16:58:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16411)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    value character varying(150)
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16410)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 5070 (class 0 OID 0)
-- Dependencies: 223
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 222 (class 1259 OID 16398)
-- Name: employers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employers (
    id integer NOT NULL,
    name character varying(50),
    surname character varying(50),
    middlename character varying(50),
    roleid integer
);


ALTER TABLE public.employers OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16397)
-- Name: employers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.employers_id_seq OWNER TO postgres;

--
-- TOC entry 5071 (class 0 OID 0)
-- Dependencies: 221
-- Name: employers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employers_id_seq OWNED BY public.employers.id;


--
-- TOC entry 230 (class 1259 OID 16440)
-- Name: records; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.records (
    id integer NOT NULL,
    record_time timestamp with time zone DEFAULT now() NOT NULL,
    workviewid integer NOT NULL,
    employeid integer NOT NULL,
    unutid integer NOT NULL,
    unutvalue integer NOT NULL,
    comment character varying(255),
    roleid integer NOT NULL
);


ALTER TABLE public.records OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16439)
-- Name: records_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.records_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.records_id_seq OWNER TO postgres;

--
-- TOC entry 5072 (class 0 OID 0)
-- Dependencies: 229
-- Name: records_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.records_id_seq OWNED BY public.records.id;


--
-- TOC entry 220 (class 1259 OID 16390)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id integer NOT NULL,
    value character varying(250)
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16389)
-- Name: role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.role_id_seq OWNER TO postgres;

--
-- TOC entry 5073 (class 0 OID 0)
-- Dependencies: 219
-- Name: role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;


--
-- TOC entry 228 (class 1259 OID 16432)
-- Name: unittypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unittypes (
    id integer NOT NULL,
    value character varying(150)
);


ALTER TABLE public.unittypes OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16431)
-- Name: unittypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.unittypes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.unittypes_id_seq OWNER TO postgres;

--
-- TOC entry 5074 (class 0 OID 0)
-- Dependencies: 227
-- Name: unittypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unittypes_id_seq OWNED BY public.unittypes.id;


--
-- TOC entry 226 (class 1259 OID 16419)
-- Name: workview; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workview (
    id integer NOT NULL,
    value character varying(150),
    categoryid integer
);


ALTER TABLE public.workview OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16418)
-- Name: workview_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.workview_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.workview_id_seq OWNER TO postgres;

--
-- TOC entry 5075 (class 0 OID 0)
-- Dependencies: 225
-- Name: workview_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.workview_id_seq OWNED BY public.workview.id;


--
-- TOC entry 4883 (class 2604 OID 16414)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 4882 (class 2604 OID 16401)
-- Name: employers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employers ALTER COLUMN id SET DEFAULT nextval('public.employers_id_seq'::regclass);


--
-- TOC entry 4886 (class 2604 OID 16443)
-- Name: records id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records ALTER COLUMN id SET DEFAULT nextval('public.records_id_seq'::regclass);


--
-- TOC entry 4881 (class 2604 OID 16393)
-- Name: role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);


--
-- TOC entry 4885 (class 2604 OID 16435)
-- Name: unittypes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unittypes ALTER COLUMN id SET DEFAULT nextval('public.unittypes_id_seq'::regclass);


--
-- TOC entry 4884 (class 2604 OID 16422)
-- Name: workview id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workview ALTER COLUMN id SET DEFAULT nextval('public.workview_id_seq'::regclass);


--
-- TOC entry 5058 (class 0 OID 16411)
-- Dependencies: 224
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, value) FROM stdin;
1	Покраска
2	Монтаж
3	Кровельные
4	Фасадные
5	Отделочные
6	Земляные
7	Фундаментные и свайные
8	Возведение каркаса и стен
9	Монтаж инженерных сетей
\.


--
-- TOC entry 5056 (class 0 OID 16398)
-- Dependencies: 222
-- Data for Name: employers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employers (id, name, surname, middlename, roleid) FROM stdin;
1	Тимофей	Спиридонов	Романович	5
2	Артем	Лисичкин	Сергеевич	8
3	Денис	Стручко	Дмитриевич	1
4	Дмитрий	Смирнов	Андреевич	2
5	Артем	Кузнецов	Генадьевич	3
6	Максим	Попов	Алексеевич	4
7	Илья	Васильев	Игоревич	5
8	Игорь	Соколов	Николаевич	6
9	Евгений	Степанов	Анатольевич	7
10	Андрей	Новиков	Русланович	9
\.


--
-- TOC entry 5064 (class 0 OID 16440)
-- Dependencies: 230
-- Data for Name: records; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.records (id, record_time, workviewid, employeid, unutid, unutvalue, comment, roleid) FROM stdin;
7	2026-05-28 15:47:59.160385+03	1	1	1	1		1
8	2026-05-29 12:13:16.32216+03	2	2	2	12	Сделал все что мог	3
\.


--
-- TOC entry 5054 (class 0 OID 16390)
-- Dependencies: 220
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role (id, value) FROM stdin;
1	Каменщик
2	Бетонщик
3	Плотник
4	Арматурщик
5	Отделочник
6	Крановщик
7	Кровельщик
8	Маляр-штукатур
9	Энергетик
\.


--
-- TOC entry 5062 (class 0 OID 16432)
-- Dependencies: 228
-- Data for Name: unittypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unittypes (id, value) FROM stdin;
1	м³
2	м²
3	м
4	т, кг
5	шт.
\.


--
-- TOC entry 5060 (class 0 OID 16419)
-- Dependencies: 226
-- Data for Name: workview; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.workview (id, value, categoryid) FROM stdin;
1	Покраска стен	1
2	Кладка кирпича/блоков	8
3	Укладка гидро-пароизоляции, кровельного покрытия и водостоков	3
4	Облицовка	4
5	Утепление	4
6	Остекление	4
7	Прокладка электрических кабелей	9
8	Штукатурка	5
9	Шпатлевка	5
10	Монтаж потолков и напольных покрытий	5
\.


--
-- TOC entry 5076 (class 0 OID 0)
-- Dependencies: 223
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- TOC entry 5077 (class 0 OID 0)
-- Dependencies: 221
-- Name: employers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employers_id_seq', 1, false);


--
-- TOC entry 5078 (class 0 OID 0)
-- Dependencies: 229
-- Name: records_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.records_id_seq', 8, true);


--
-- TOC entry 5079 (class 0 OID 0)
-- Dependencies: 219
-- Name: role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.role_id_seq', 1, false);


--
-- TOC entry 5080 (class 0 OID 0)
-- Dependencies: 227
-- Name: unittypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unittypes_id_seq', 1, false);


--
-- TOC entry 5081 (class 0 OID 0)
-- Dependencies: 225
-- Name: workview_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.workview_id_seq', 1, false);


--
-- TOC entry 4893 (class 2606 OID 16417)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 4891 (class 2606 OID 16404)
-- Name: employers employers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employers
    ADD CONSTRAINT employers_pkey PRIMARY KEY (id);


--
-- TOC entry 4899 (class 2606 OID 16447)
-- Name: records records_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_pkey PRIMARY KEY (id);


--
-- TOC entry 4889 (class 2606 OID 16396)
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- TOC entry 4897 (class 2606 OID 16438)
-- Name: unittypes unittypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unittypes
    ADD CONSTRAINT unittypes_pkey PRIMARY KEY (id);


--
-- TOC entry 4895 (class 2606 OID 16425)
-- Name: workview workview_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workview
    ADD CONSTRAINT workview_pkey PRIMARY KEY (id);


--
-- TOC entry 4900 (class 2606 OID 16405)
-- Name: employers employers_roleid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employers
    ADD CONSTRAINT employers_roleid_fkey FOREIGN KEY (roleid) REFERENCES public.role(id);


--
-- TOC entry 4902 (class 2606 OID 16453)
-- Name: records records_employeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_employeid_fkey FOREIGN KEY (employeid) REFERENCES public.employers(id);


--
-- TOC entry 4903 (class 2606 OID 24583)
-- Name: records records_roleid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_roleid_fkey FOREIGN KEY (roleid) REFERENCES public.role(id);


--
-- TOC entry 4904 (class 2606 OID 16458)
-- Name: records records_unutid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_unutid_fkey FOREIGN KEY (unutid) REFERENCES public.unittypes(id);


--
-- TOC entry 4905 (class 2606 OID 16448)
-- Name: records records_workviewid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_workviewid_fkey FOREIGN KEY (workviewid) REFERENCES public.workview(id);


--
-- TOC entry 4901 (class 2606 OID 16426)
-- Name: workview workview_categoryid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workview
    ADD CONSTRAINT workview_categoryid_fkey FOREIGN KEY (categoryid) REFERENCES public.category(id);


-- Completed on 2026-05-29 16:58:13

--
-- PostgreSQL database dump complete
--

\unrestrict lk1phsRsKBseTLVJDcU2wpbPawWvkSiVVirz08NMeTjJ1x7Rvt79OkcQdSuDM0V

