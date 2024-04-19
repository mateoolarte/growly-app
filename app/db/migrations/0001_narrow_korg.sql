ALTER TABLE "app_service" ALTER COLUMN "app_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "app_service" ALTER COLUMN "service_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customer_plan" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customer_plan" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "customer_plan" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customer_plan" ALTER COLUMN "customer_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customer_plan" ALTER COLUMN "plan_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "service" ALTER COLUMN "name" SET NOT NULL;