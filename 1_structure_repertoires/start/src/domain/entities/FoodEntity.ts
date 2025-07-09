import {VALID_TITLE_PATTERN} from "@foodsapp/utils/constants.ts";

export class FoodEntity {
	isValidTitle(title: string) {
		return title.trim().length > 0 && VALID_TITLE_PATTERN.test(title);
	}
}
