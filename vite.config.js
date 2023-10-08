import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import {glob} from "glob";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.scss',
                ...glob.sync('resources/css/pages/*.scss'),

                'resources/js/app.js',
                ...glob.sync('resources/js/pages/*.js'),
            ],
            refresh: true,
        }),
    ],
});
