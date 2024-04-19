import { relations } from "drizzle-orm";
import {
  serial,
  pgTable,
  integer,
  text,
  pgEnum,
  timestamp,
} from "drizzle-orm/pg-core";

export const installmentsEnum = pgEnum("installments", ["1", "3"]);

export const statusAppEnum = pgEnum("status_app", [
  "initial",
  "in-progress",
  "default",
]);

export const frequencyEnum = pgEnum("frequency", ["monthly", "yearly"]);

export const statusServiceEnum = pgEnum("status_service", [
  "pending",
  "disabled",
  "enabled",
]);

export const customer = pgTable("customer", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
});

export const plan = pgTable("plan", {
  id: serial("id").primaryKey(),
  name: text("name"),
  installments: installmentsEnum("installments").default("1"),
});

export const app = pgTable("app", {
  id: serial("id").primaryKey(),
  status: statusAppEnum("status").default("initial"),
  websiteUrl: text("website_url"),
  adminUrl: text("admin_url"),
  customerId: integer("customer_id")
    .notNull()
    .references(() => customer.id),
});

export const service = pgTable("service", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  amount: integer("amount"),
  frequency: frequencyEnum("frequency"),
});

export const customerPlan = pgTable("customer_plan", {
  id: serial("id").primaryKey(),
  paymentId: integer("payment_id").unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  customerId: integer("customer_id")
    .notNull()
    .references(() => customer.id),
  planId: integer("plan_id")
    .notNull()
    .references(() => plan.id),
});

export const appService = pgTable("app_service", {
  id: serial("id").primaryKey(),
  information: text("information"),
  status: statusServiceEnum("status").default("pending"),
  paymentId: integer("payment_id").unique(),
  appId: integer("app_id")
    .notNull()
    .references(() => app.id),
  serviceId: integer("service_id")
    .notNull()
    .references(() => service.id),
});

export const customerRelations = relations(customer, ({ one, many }) => ({
  app: one(app, {
    references: [app.id],
    fields: [customer.id],
  }),
  plans: many(customerPlan),
}));

export const appRelations = relations(app, ({ one, many }) => ({
  customer: one(customer),
  services: many(appService),
}));

export const serviceRelations = relations(service, ({ many }) => ({
  apps: many(appService),
}));

export const customerPlanRelations = relations(customerPlan, ({ one }) => ({
  customer: one(customer, {
    fields: [customerPlan.customerId],
    references: [customer.id],
  }),
  plan: one(plan, {
    fields: [customerPlan.planId],
    references: [plan.id],
  }),
}));

export const appServiceRelations = relations(appService, ({ one }) => ({
  app: one(app, {
    fields: [appService.appId],
    references: [app.id],
  }),
  service: one(service, {
    fields: [appService.serviceId],
    references: [service.id],
  }),
}));
