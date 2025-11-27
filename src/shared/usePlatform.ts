// @todo: https://github.com/telegram-mini-apps-dev/TelegramUI/blob/main/src/components/Service/AppRoot/hooks/usePlatform.ts#L6

import type { MaybeRefOrGetter, ComputedRef } from "vue";
import { toValue, computed } from "vue";
import { useAppRootContext } from "./useAppRootContext";

export const usePlatform = (platform?: MaybeRefOrGetter<string>): ComputedRef<NonNullable<string>> => {
	const context = useAppRootContext();

	return computed(() => toValue(platform) || toValue(context?.platform) || "base");
};
