export default function usePrinter() {
    function printHeading(text) {
        const pad = '🚢 '.repeat(text.length/3);
        console.log(`🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 ${pad}🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢`);
        console.log(`🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 ${text}🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢`);
        console.log(`🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 ${pad}🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢`);
    }
    function printLine(...text) {
        console.log(' 🚢 ',...text);
    }
    return {
        printHeading,
        printLine,
    }
}