CREATE TABLE public.gallery (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    src text NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.gallery OWNER TO postgres;

--
-- Name: gallery_order_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gallery_order_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gallery_order_seq OWNER TO postgres;

--
-- Name: gallery_order_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gallery_order_seq OWNED BY public.gallery."order";


--
-- Name: gallery order; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery ALTER COLUMN "order" SET DEFAULT nextval('public.gallery_order_seq'::regclass);


--
-- Name: gallery gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery
    ADD CONSTRAINT gallery_pkey PRIMARY KEY (id);

    --
-- Data for Name: gallery; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.gallery VALUES ('2f37c333-e32b-498a-acd7-7255450e8da3', 'gallery_coffee_shop1.png', 4, 3, 1);
INSERT INTO public.gallery VALUES ('2ff63fba-ba25-472d-802e-a644644afc62', 'gallery_coffee_shop2.png', 1, 1, 2);
INSERT INTO public.gallery VALUES ('71e7fe24-a899-42a2-bed8-bbe401dee251', 'gallery_coffee_shop3.png', 4, 3, 3);
INSERT INTO public.gallery VALUES ('fa10800e-731c-40f2-af87-34be4e5ab96c', 'gallery_coffee_shop4.png', 3, 2, 4);
INSERT INTO public.gallery VALUES ('f8302799-5042-4e86-a535-2cac80b16030', 'gallery_coffee_shop8.png', 3, 2, 5);
INSERT INTO public.gallery VALUES ('8d8d7954-9f6e-4c84-85fc-5c6b6cccb299', 'gallery_coffee_shop6.png', 1, 1, 6);
INSERT INTO public.gallery VALUES ('0964256b-7498-4360-b987-91715ec71ffe', 'gallery_coffee_shop7.png', 3, 2, 7);
INSERT INTO public.gallery VALUES ('fbf9b976-21c2-42c7-b61b-e4bea8f00ff9', 'gallery_coffee_shop5.png', 1, 1, 8);
INSERT INTO public.gallery VALUES ('cc9c8296-2fe0-4897-83a3-017531961d0e', 'gallery_coffee_shop9.png', 4, 3, 9);
INSERT INTO public.gallery VALUES ('53ef0eb3-9b38-43ce-98d8-12673ead5381', 'gallery_coffee_shop10.png', 3, 2, 10);
INSERT INTO public.gallery VALUES ('740e7e41-b81b-4240-8a60-6bd8df7f55ac', 'gallery_coffee_shop11.png', 4, 3, 11);
INSERT INTO public.gallery VALUES ('cc25bae0-f3c2-4282-bc62-e50418713e36', 'gallery_coffee_shop12.png', 5, 3, 12);
INSERT INTO public.gallery VALUES ('8ea26552-4d45-4309-ba01-35f35382c59c', 'gallery_coffee_shop13.png', 4, 3, 13);
INSERT INTO public.gallery VALUES ('df4f28f9-9695-4a54-9afe-c24c5458a06f', 'gallery_coffee_shop14.png', 3, 2, 14);
INSERT INTO public.gallery VALUES ('bcada862-e89f-40c9-af45-c414b1b41315', 'gallery_coffee_shop15.png', 5, 3, 15);
INSERT INTO public.gallery VALUES ('054de6fd-9916-4283-af8e-632f168c98b5', 'gallery_coffee_shop16.png', 2, 1, 16);
INSERT INTO public.gallery VALUES ('37e3a448-052c-4354-b0c6-3c7f8d3f4e01', 'gallery_coffee_shop17.png', 1, 1, 17);
INSERT INTO public.gallery VALUES ('c3f7d890-a9fc-4ec5-aeac-f3c35c920e44', 'gallery_coffee_shop21.png', 4, 3, 18);
INSERT INTO public.gallery VALUES ('15026f4d-05d6-4f65-be29-64c2f2744cd3', 'gallery_coffee_shop19.png', 2, 1, 19);
INSERT INTO public.gallery VALUES ('059d458d-a690-4f3b-a8ae-57b51647ba12', 'gallery_coffee_shop20.png', 3, 2, 20);
INSERT INTO public.gallery VALUES ('d3dc4d0b-397b-4bff-987a-2a71e48dfe4d', 'gallery_coffee_shop18.png', 1, 1, 21);
INSERT INTO public.gallery VALUES ('cd6135f1-964d-4b89-942d-7b4f9b1ffa2a', 'gallery_coffee_shop22.png', 4, 3, 22);
INSERT INTO public.gallery VALUES ('f4e37067-7cab-454b-b65e-a0dad06e45b7', 'gallery_coffee_shop23.png', 1, 1, 23);
INSERT INTO public.gallery VALUES ('e33c78e4-b063-4009-bed7-830186d46d81', 'gallery_coffee_shop25.png', 2, 1, 24);
INSERT INTO public.gallery VALUES ('c7f5b15e-4778-482b-b2e3-e5bb8ac7da26', 'gallery_coffee_shop26.png', 4, 3, 25);
INSERT INTO public.gallery VALUES ('79850d34-4264-4d62-b36f-4b33c251a32c', 'gallery_coffee_shop27.png', 3, 2, 26);
INSERT INTO public.gallery VALUES ('51a0fb20-84fe-458e-9430-d529bb847b56', 'gallery_coffee_shop28.png', 1, 1, 27);
INSERT INTO public.gallery VALUES ('1ffe507d-121f-4deb-84df-b4010df8d128', 'gallery_coffee_shop29.png', 3, 2, 28);
INSERT INTO public.gallery VALUES ('92c1156b-ca84-4d5d-a846-42edbb3dc870', 'gallery_coffee_shop30.png', 3, 2, 29);
INSERT INTO public.gallery VALUES ('628b58ea-b885-4386-8a1a-13a4fa7e50d8', 'gallery_coffee_shop31.png', 1, 1, 30);
INSERT INTO public.gallery VALUES ('5db58b06-cae4-4691-b06a-c7ee40eb1bf2', 'gallery_coffee_shop32.png', 2, 1, 31);
INSERT INTO public.gallery VALUES ('2d82d350-4f63-4820-9627-acde276f2d71', 'gallery_coffee_shop33.png', 4, 3, 32);
INSERT INTO public.gallery VALUES ('d12f0cc6-8fc7-486a-b7e6-5d7c5b626bee', 'gallery_coffee_shop34.png', 2, 1, 33);
INSERT INTO public.gallery VALUES ('0a219551-2d61-4633-9b37-344d45e53480', 'gallery_coffee_shop35.png', 3, 2, 34);
INSERT INTO public.gallery VALUES ('7cb42711-5e95-4c3d-9620-30d30bb81827', 'gallery_coffee_shop36.png', 2, 1, 35);
INSERT INTO public.gallery VALUES ('e21d3630-07c8-4485-a017-590a96857fa7', 'gallery_coffee_shop37.png', 3, 2, 36);
INSERT INTO public.gallery VALUES ('b7a181b6-b392-45c7-b548-6947d503e3b4', 'gallery_coffee_shop38.png', 4, 3, 37);
INSERT INTO public.gallery VALUES ('d7071dd6-bbad-43fd-a05e-defd8c85683f', 'gallery_coffee_shop39.png', 2, 1, 38);
INSERT INTO public.gallery VALUES ('02589146-e58d-42ef-bf98-c1da8a0e7877', 'gallery_coffee_shop40.png', 4, 3, 39);
INSERT INTO public.gallery VALUES ('30caf848-2314-4033-a097-0ba61a39d221', 'gallery_coffee_shop41.png', 1, 1, 40);
INSERT INTO public.gallery VALUES ('dcbb04f8-3684-4ca6-9922-6f08b50aee92', 'gallery_coffee_shop42.png', 4, 3, 41);
INSERT INTO public.gallery VALUES ('85f54319-a806-4acf-b2af-09df49207743', 'gallery_coffee_shop43.png', 2, 1, 42);
INSERT INTO public.gallery VALUES ('5da43ebf-1380-40b2-85c8-ba84a8ee5aa4', 'gallery_coffee_shop44.png', 3, 2, 43);
INSERT INTO public.gallery VALUES ('04a2d135-035e-487b-9353-840c47b11e68', 'gallery_coffee_shop45.png', 2, 1, 44);
INSERT INTO public.gallery VALUES ('4768da69-eaa1-4f68-b8dd-17a64d095da7', 'gallery_coffee_shop46.png', 4, 3, 45);
INSERT INTO public.gallery VALUES ('303d1a2f-5d31-4f0b-bddc-436c0b6ad18d', 'gallery_coffee_shop1.png', 4, 3, 46);
INSERT INTO public.gallery VALUES ('76232a98-949e-42aa-91d7-cd9c1564aa75', 'gallery_coffee_shop2.png', 1, 1, 47);
INSERT INTO public.gallery VALUES ('9c8ee331-a6d5-4094-84ca-fe9f3f957296', 'gallery_coffee_shop3.png', 4, 3, 48);
INSERT INTO public.gallery VALUES ('ed516102-48a4-4de3-96d8-fa07c20d9dde', 'gallery_coffee_shop4.png', 3, 2, 49);
INSERT INTO public.gallery VALUES ('903c7104-1bdf-49ee-a6fc-9c6f44f8c374', 'gallery_coffee_shop8.png', 3, 2, 50);
INSERT INTO public.gallery VALUES ('31f1d567-eac8-4259-8600-9be5b45c053f', 'gallery_coffee_shop6.png', 1, 1, 51);
INSERT INTO public.gallery VALUES ('2d16c833-2d17-465d-8bd0-a21a503383e7', 'gallery_coffee_shop7.png', 3, 2, 52);
INSERT INTO public.gallery VALUES ('86926037-8969-4330-bfdd-e92808ff679b', 'gallery_coffee_shop5.png', 1, 1, 53);
INSERT INTO public.gallery VALUES ('99eef99c-9c93-4208-8ae3-3a396c8d9d38', 'gallery_coffee_shop9.png', 4, 3, 54);
INSERT INTO public.gallery VALUES ('8613d6d7-2ad2-4f2c-88df-e38ec978fe1a', 'gallery_coffee_shop10.png', 3, 2, 55);
INSERT INTO public.gallery VALUES ('8d31b810-69da-48f4-90e4-fd911857034b', 'gallery_coffee_shop11.png', 4, 3, 56);
INSERT INTO public.gallery VALUES ('40e123fc-6cef-4dff-9fb0-5c16f605d3f2', 'gallery_coffee_shop12.png', 5, 3, 57);
INSERT INTO public.gallery VALUES ('32a0fa7f-fc7e-4259-994a-ea55016c3d2a', 'gallery_coffee_shop13.png', 4, 3, 58);
INSERT INTO public.gallery VALUES ('a1d0d8cf-ffbe-4370-aa2e-ec2949e8de7c', 'gallery_coffee_shop14.png', 3, 2, 59);
INSERT INTO public.gallery VALUES ('3629c3f9-3d20-40d4-8513-030896e7c515', 'gallery_coffee_shop15.png', 5, 3, 60);
INSERT INTO public.gallery VALUES ('14504a55-a5a5-4d66-912c-89637b8d4234', 'gallery_coffee_shop16.png', 2, 1, 61);
INSERT INTO public.gallery VALUES ('2f586033-98ec-40ea-b74d-df8e72a0922b', 'gallery_coffee_shop17.png', 1, 1, 62);
INSERT INTO public.gallery VALUES ('8d627c95-f98a-4875-a9c9-fd58cf8084a5', 'gallery_coffee_shop21.png', 4, 3, 63);
INSERT INTO public.gallery VALUES ('2aa32778-2320-4578-98f9-f1ad15048511', 'gallery_coffee_shop19.png', 2, 1, 64);
INSERT INTO public.gallery VALUES ('c7c36d93-88ab-404d-b8e3-4e6e01fcdac4', 'gallery_coffee_shop20.png', 3, 2, 65);
INSERT INTO public.gallery VALUES ('cd16d392-71ff-4456-8bf9-4c88f9afafd7', 'gallery_coffee_shop18.png', 1, 1, 66);
INSERT INTO public.gallery VALUES ('18c515c8-4b12-49e8-8d4b-e8d6f116df90', 'gallery_coffee_shop22.png', 4, 3, 67);
INSERT INTO public.gallery VALUES ('12bb6dda-1970-4f4d-be99-b6acfb30c64c', 'gallery_coffee_shop23.png', 1, 1, 68);
INSERT INTO public.gallery VALUES ('c812eedc-9bfa-48af-9433-51375cb05432', 'gallery_coffee_shop25.png', 2, 1, 69);
INSERT INTO public.gallery VALUES ('f8bede31-cd21-4274-a10b-6c8b524f787e', 'gallery_coffee_shop26.png', 4, 3, 70);
INSERT INTO public.gallery VALUES ('9fa234c4-3c77-4dfa-bdb0-e3b5f75b3a63', 'gallery_coffee_shop27.png', 3, 2, 71);
INSERT INTO public.gallery VALUES ('0d16ed7f-52a3-4779-a7e3-cec41b5fea95', 'gallery_coffee_shop28.png', 1, 1, 72);
INSERT INTO public.gallery VALUES ('9aa46be2-a421-42a3-ad8e-a0e29937016f', 'gallery_coffee_shop29.png', 3, 2, 73);
INSERT INTO public.gallery VALUES ('d3d53105-af84-4e6d-90a5-d309b9dbfae5', 'gallery_coffee_shop30.png', 3, 2, 74);
INSERT INTO public.gallery VALUES ('b07d4b13-da7c-493d-92ff-3b4749e2bbd5', 'gallery_coffee_shop31.png', 1, 1, 75);
INSERT INTO public.gallery VALUES ('03e683a8-e91d-49af-affc-a8fced15ed19', 'gallery_coffee_shop32.png', 2, 1, 76);
INSERT INTO public.gallery VALUES ('e66b4e20-8fe4-42ac-8c15-e66b1d0c8466', 'gallery_coffee_shop33.png', 4, 3, 77);
INSERT INTO public.gallery VALUES ('e35a46d8-7158-40cf-b6d3-eb4f62f2e492', 'gallery_coffee_shop34.png', 2, 1, 78);
INSERT INTO public.gallery VALUES ('9f5fb690-8cc4-4a7d-948b-2160955fe0c4', 'gallery_coffee_shop35.png', 3, 2, 79);
INSERT INTO public.gallery VALUES ('7273bfeb-9aa6-4378-bc7a-acb3471ece0b', 'gallery_coffee_shop36.png', 2, 1, 80);
INSERT INTO public.gallery VALUES ('73b41588-3b87-4940-9264-6af6d0395f3e', 'gallery_coffee_shop37.png', 3, 2, 81);
INSERT INTO public.gallery VALUES ('9feccf8b-bf50-40dc-8cb6-a3fd5ef07226', 'gallery_coffee_shop38.png', 4, 3, 82);
INSERT INTO public.gallery VALUES ('984d69d8-cd70-4d9d-a7fa-6b22c453d913', 'gallery_coffee_shop39.png', 2, 1, 83);
INSERT INTO public.gallery VALUES ('d4c6c808-2b24-46f7-aeb6-12a8d17ee880', 'gallery_coffee_shop40.png', 4, 3, 84);
INSERT INTO public.gallery VALUES ('5e56f896-e168-434a-aa9a-a9a890c73580', 'gallery_coffee_shop41.png', 1, 1, 85);
INSERT INTO public.gallery VALUES ('8f62db0e-918a-4cd2-b4f6-e2d2296389c0', 'gallery_coffee_shop42.png', 4, 3, 86);
INSERT INTO public.gallery VALUES ('22d95c1c-78b3-4dee-8b55-593ab7cf0172', 'gallery_coffee_shop43.png', 2, 1, 87);
INSERT INTO public.gallery VALUES ('48c1be58-81f9-47ee-a7a9-fd231c7d823a', 'gallery_coffee_shop44.png', 3, 2, 88);
INSERT INTO public.gallery VALUES ('9bcfee1d-16e5-4636-b1c6-c7fa85dd1c97', 'gallery_coffee_shop45.png', 2, 1, 89);
INSERT INTO public.gallery VALUES ('f7c467da-37aa-46fd-8531-3ab170a7cb24', 'gallery_coffee_shop46.png', 4, 3, 90);