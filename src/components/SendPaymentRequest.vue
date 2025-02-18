<template>
  <div v-if="sendData.paymentRequest" class="q-pa-none q-ma-none q-mt-md">
    <div class="q-mb-md text-center">
      <q-btn
        rounded
        dense
        color="primary"
        class="q-px-md"
        @click="clickPaymentRequest"
      >
        <q-icon name="send" class="q-pr-xs" />
        Pay via {{ getPaymentRequestTransportType(sendData.paymentRequest) }}
      </q-btn>
    </div>
    <div class="q-mb-md text-center">
      <pre
        class="q-mt-md q-mb-md text-center"
        style="
          white-space: pre-wrap;
          word-wrap: break-word;
          max-width: 350px;
          margin: 0 auto;
        "
        >{{ getPaymentRequestTarget(sendData.paymentRequest) }}
      </pre>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMintsStore } from "stores/mints";
import { useP2PKStore } from "src/stores/p2pk";
import { useSendTokensStore } from "src/stores/sendTokensStore";
import { usePRStore } from "src/stores/payment-request";
import { PaymentRequest, PaymentRequestTransportType } from "@cashu/cashu-ts";

export default defineComponent({
  name: "SendPaymentRequest",
  mixins: [windowMixin],
  props: {},
  data: function () {
    return {};
  },
  watch: {},
  computed: {
    ...mapWritableState(useSendTokensStore, [
      "showSendTokens",
      "showLockInput",
      "sendData",
    ]),
    ...mapState(useMintsStore, ["activeMintUrl", "mints"]),
  },
  methods: {
    ...mapActions(useP2PKStore, ["isLocked", "isLockedToUs"]),
    ...mapActions(usePRStore, ["parseAndPayPaymentRequest"]),
    clickPaymentRequest: function () {
      this.parseAndPayPaymentRequest(
        this.sendData.paymentRequest,
        this.sendData.tokensBase64
      );
    },
    getPaymentRequestTransportType: function (request) {
      if (!request || !request.transport) {
        return "Unknown";
      }
      console.log(`### getPaymentRequestTransportType: ${request}`);
      const transports = request.transport;
      for (const transport of transports) {
        if (transport.type == PaymentRequestTransportType.NOSTR) {
          return "Nostr";
        }
        if (transport.type == PaymentRequestTransportType.POST) {
          return "HTTP";
        }
      }
    },
    getPaymentRequestTarget: function (request) {
      if (!request || !request.transport) {
        return "Unknown";
      }
      console.log(`### getPaymentRequestDestination: ${request}`);
      const transports = request.transport;
      for (const transport of transports) {
        if (transport.type == PaymentRequestTransportType.NOSTR) {
          return `${transport.target.slice(0, 20)}..${transport.target.slice(
            -10
          )}`;
        }
        if (transport.type == PaymentRequestTransportType.POST) {
          try {
            const url = new URL(transport.target);
            return url.hostname;
          } catch (error) {
            console.error(
              `Invalid URL in transport.target: ${transport.target}`,
              error
            );
            return "Invalid URL";
          }
        }
      }
    },
  },
});
</script>
