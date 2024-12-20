import { expect,test } from "vitest";
import { goodLetters } from "./script";

test("cas démarrage #1", () => {
    expect(goodLetters("hello","hello")).toStrictEqual([ 'h', 'e', 'l', 'l', 'o' ])
})

test("cas démarrage #2", () => {
    expect(goodLetters('hello','hxllo')).toStrictEqual([ 'h', 'l', 'l', 'o' ])
})

test("cas démarrage #3", () => {
    expect(goodLetters("hello",3)).toStrictEqual("il faut des mots")
}) 

test("cas démarrage #4", () => {
    expect(goodLetters("hello",[])).toStrictEqual("il faut des mots")
})

test("cas démarrage #5", () => {
    expect(goodLetters("hello","")).toStrictEqual("il faut des mots")
})
