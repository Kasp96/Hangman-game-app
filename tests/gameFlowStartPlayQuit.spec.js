import { test, expect } from "@playwright/test";

test("Start-play-pause-quit test", async ({ page }) => {
  await page.goto("localhost:5173");
  await page.getByRole("button").filter({ hasText: /^$/ }).click();
  await page.getByRole("button", { name: "Movies" }).click();
  await page.getByRole("button", { name: "A", exact: true }).click();
  await page.getByRole("button", { name: "E", exact: true }).click();
  await page.getByRole("button", { name: "I", exact: true }).click();
  await page.getByRole("button", { name: "O" }).click();
  await page.getByRole("button", { name: "U" }).click();
  await page.getByRole("link", { name: "icon back" }).click();
  await page.getByRole("button", { name: "New Category" }).click();
  await page.getByRole("button", { name: "Countries" }).click();
  await page.getByRole("button", { name: "A", exact: true }).click();
  await page.getByRole("button", { name: "E", exact: true }).click();
  await page.getByRole("button", { name: "I", exact: true }).click();
  await page.getByRole("button", { name: "O" }).click();
  await page.getByRole("button", { name: "U" }).click();
  await page.getByRole("link", { name: "icon back" }).click();
  await page.getByRole("button", { name: "Quit Game" }).click();
  await expect(page).toHaveURL("localhost:5173");
});
