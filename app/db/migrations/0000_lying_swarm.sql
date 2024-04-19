DO $$ BEGIN
 CREATE TYPE "frequency" AS ENUM('monthly', 'yearly');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "installments" AS ENUM('1', '3');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "status_app" AS ENUM('initial', 'in-progress', 'default');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "status_service" AS ENUM('pending', 'disabled', 'enabled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "app" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" "status_app",
	"website_url" text,
	"admin_url" text,
	"customer_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "app_service" (
	"id" serial PRIMARY KEY NOT NULL,
	"information" text,
	"status" "status_service",
	"payment_id" integer,
	"app_id" integer,
	"service_id" integer,
	CONSTRAINT "app_service_payment_id_unique" UNIQUE("payment_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customer" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customer_plan" (
	"id" serial PRIMARY KEY NOT NULL,
	"payment_id" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	"customer_id" integer,
	"plan_id" integer,
	CONSTRAINT "customer_plan_payment_id_unique" UNIQUE("payment_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "plan" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"installments" "installments"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "service" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"amount" integer,
	"frequency" "frequency"
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "app" ADD CONSTRAINT "app_customer_id_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "app_service" ADD CONSTRAINT "app_service_app_id_app_id_fk" FOREIGN KEY ("app_id") REFERENCES "app"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "app_service" ADD CONSTRAINT "app_service_service_id_service_id_fk" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customer_plan" ADD CONSTRAINT "customer_plan_customer_id_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customer_plan" ADD CONSTRAINT "customer_plan_plan_id_plan_id_fk" FOREIGN KEY ("plan_id") REFERENCES "plan"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
