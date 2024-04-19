ALTER TABLE "app" ALTER COLUMN "status" SET DEFAULT 'initial';--> statement-breakpoint
ALTER TABLE "app_service" ALTER COLUMN "status" SET DEFAULT 'pending';--> statement-breakpoint
ALTER TABLE "plan" ALTER COLUMN "installments" SET DEFAULT '1';