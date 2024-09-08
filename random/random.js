// 32 KiB
Deno.writeFileSync('random.bin', crypto.getRandomValues(new Uint8Array(2 << 14)));
