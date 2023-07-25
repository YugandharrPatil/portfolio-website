CREATE TABLE `messages` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`email` varchar(256),
	`message` text,
	CONSTRAINT `messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `post`;--> statement-breakpoint
DROP TABLE `user`;