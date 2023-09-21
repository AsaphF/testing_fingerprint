// Randomizing WebGl

/*
const WEBGL_RENDERERS = [
  "ANGLE (NVIDIA Quadro 2000M Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (NVIDIA Quadro K420 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA Quadro 2000M Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA Quadro K2000M Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (Intel(R) HD Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics Family Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon HD 3800 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (AMD Radeon R9 200 Series Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (Intel(R) HD Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics Family Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics Family Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics 4000 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics 3000 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) G33/G31 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (Intel(R) Graphics Media Accelerator 3150 Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (Intel(R) G41 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 6150SE nForce 430 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics 4000)",
  "ANGLE (Intel(R) HD Graphics Family)",
  "ANGLE (NVIDIA GeForce GTX 760 Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (NVIDIA GeForce GTX 760 Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (NVIDIA GeForce GTX 760 Direct3D11 vs_5_0 ps_5_0)",
  "ANGLE (AMD Radeon HD 6310 Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Graphics Media Accelerator 3600 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) G33/G31 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)",
  "ANGLE (AMD Radeon HD 6320 Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) G33/G31 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (Intel(R) G41 Express Chipset)",
  "ANGLE (ATI Mobility Radeon HD 5470 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Q45/Q43 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 310M Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) G41 Express Chipset Direct3D9 vs_3_0 ps_3_0)",
  "ANGLE (Mobile Intel(R) 45 Express Chipset Family (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GT 440 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon HD 4300/4500 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 7310 Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics)",
  "ANGLE (Intel(R) 4 Series Internal Chipset Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon(TM) HD 6480G Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon HD 3200 Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 7800 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 210 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GT 630 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 7340 Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) 82945G Express Chipset Family Direct3D9 vs_0_0 ps_2_0)",
  "ANGLE (NVIDIA GeForce GT 430 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 7025 / NVIDIA nForce 630a Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Q35 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (Intel(R) HD Graphics 4600 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 7520G Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD 760G (Microsoft Corporation WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GT 220 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 9500 GT Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics Family Direct3D9 vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Graphics Media Accelerator HD Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 9800 GT Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Q965/Q963 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (NVIDIA GeForce GTX 550 Ti Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Q965/Q963 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (AMD M880G with ATI Mobility Radeon HD 4250 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GTX 650 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Mobility Radeon HD 5650 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon HD 4200 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 7700 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) G33/G31 Express Chipset Family)",
  "ANGLE (Intel(R) 82945G Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (SiS Mirage 3 Graphics Direct3D9Ex vs_2_0 ps_2_0)",
  "ANGLE (NVIDIA GeForce GT 430)",
  "ANGLE (AMD RADEON HD 6450 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon 3000 Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) 4 Series Internal Chipset Direct3D9 vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Q35 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)",
  "ANGLE (NVIDIA GeForce GT 220 Direct3D9 vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 7640G Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD 760G Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 6450 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GT 640 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 9200 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GT 610 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 6290 Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Mobility Radeon HD 4250 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 8600 GT Direct3D9 vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon HD 5570 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 6800 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) G45/G43 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon HD 4600 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA Quadro NVS 160M Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics 3000)",
  "ANGLE (NVIDIA GeForce G100)",
  "ANGLE (AMD Radeon HD 8610G + 8500M Dual Graphics Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 7025 / NVIDIA nForce 630a (Microsoft Corporation - WDDM) Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) Q965/Q963 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)",
  "ANGLE (AMD RADEON HD 6350 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (ATI Radeon HD 5450 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 9500 GT)",
  "ANGLE (AMD Radeon HD 6500M/5600/5700 Series Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce 8400 GS Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (Intel(R) HD Graphics Direct3D9 vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GTX 560 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GT 620 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GTX 660 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon(TM) HD 6520G Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA GeForce GT 240 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (AMD Radeon HD 8240 Direct3D9Ex vs_3_0 ps_3_0)",
  "ANGLE (NVIDIA Quadro NVS 140M)",
  "ANGLE (Intel(R) Q35 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)",
];

const chrome_extensions_gl = [
  "ANGLE_instanced_arrays",
  "EXT_blend_minmax",
  "EXT_color_buffer_half_float",
  "EXT_disjoint_timer_query",
  "EXT_float_blend",
  "EXT_frag_depth",
  "EXT_shader_texture_lod",
  "EXT_texture_compression_bptc",
  "EXT_texture_compression_rgtc",
  "EXT_texture_filter_anisotropic",
  "EXT_sRGB",
  "KHR_parallel_shader_compile",
  "OES_element_index_uint",
  "OES_fbo_render_mipmap",
  "OES_standard_derivatives",
  "OES_texture_float",
  "OES_texture_float_linear",
  "OES_texture_half_float",
  "OES_texture_half_float_linear",
  "OES_vertex_array_object",
  "WEBGL_color_buffer_float",
  "WEBGL_compressed_texture_s3tc",
  "WEBGL_compressed_texture_s3tc_srgb",
  "WEBGL_debug_renderer_info",
  "WEBGL_debug_shaders",
  "WEBGL_depth_texture",
  "WEBGL_draw_buffers",
  "WEBGL_lose_context",
  "WEBGL_multi_draw",
];

const chrome_extensions_gl2 = [
  "EXT_color_buffer_float",
  "EXT_color_buffer_half_float",
  "EXT_disjoint_timer_query_webgl2",
  "EXT_float_blend",
  "EXT_texture_compression_bptc",
  "EXT_texture_compression_rgtc",
  "EXT_texture_filter_anisotropic",
  "EXT_texture_norm16",
  "KHR_parallel_shader_compile",
  "OES_draw_buffers_indexed",
  "OES_texture_float_linear",
  "OVR_multiview2",
  "WEBGL_compressed_texture_s3tc",
  "WEBGL_compressed_texture_s3tc_srgb",
  "WEBGL_debug_renderer_info",
  "WEBGL_debug_shaders",
  "WEBGL_lose_context",
  "WEBGL_multi_draw",
  "WEBGL_provoking_vertex",
];

const firefox_extensions_gl = [
  "ANGLE_instanced_arrays",
  "EXT_blend_minmax",
  "EXT_color_buffer_half_float",
  "EXT_float_blend",
  "EXT_frag_depth",
  "EXT_shader_texture_lod",
  "EXT_sRGB",
  "EXT_texture_compression_bptc",
  "EXT_texture_compression_rgtc",
  "EXT_texture_filter_anisotropic",
  "OES_element_index_uint",
  "OES_fbo_render_mipmap",
  "OES_standard_derivatives",
  "OES_texture_float",
  "OES_texture_float_linear",
  "OES_texture_half_float",
  "OES_texture_half_float_linear",
  "OES_vertex_array_object",
  "WEBGL_color_buffer_float",
  "WEBGL_compressed_texture_s3tc",
  "WEBGL_compressed_texture_s3tc_srgb",
  "WEBGL_debug_renderer_info",
  "WEBGL_debug_shaders",
  "WEBGL_depth_texture",
  "WEBGL_draw_buffers",
  "WEBGL_lose_context",
  "WEBGL_provoking_vertex",
];

const firefox_extensions_gl2 = [
  "EXT_color_buffer_float",
  "EXT_float_blend",
  "EXT_texture_compression_bptc",
  "EXT_texture_compression_rgtc",
  "EXT_texture_filter_anisotropic",
  "OES_draw_buffers_indexed",
  "OES_texture_float_linear",
  "OVR_multiview2",
  "WEBGL_compressed_texture_s3tc",
  "WEBGL_compressed_texture_s3tc_srgb",
  "WEBGL_debug_renderer_info",
  "WEBGL_debug_shaders",
  "WEBGL_lose_context",
  "WEBGL_provoking_vertex"
];

const webgl_attrs_chrome = {
  alpha: true,
  antialias: true,
  depth: true,
  desynchronized: false,
  failIfMajorPerformanceCaveat: false,
  powerPreference: "default",
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  stencil: false,
  xrCompatible: false
}

const webgl_attrs_firefox = {
  alpha: true,
  antialias: true,
  depth: true,
  failIfMajorPerformanceCaveat: false,
  powerPreference: "default",
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  stencil: false,
}

WebGLRenderingContext.prototype.getParameter = (function (origFn) {
  const paramMap = {};
  paramMap[0x9245] = "Foo"; // UNMASKED_VENDOR_WEBGL
  paramMap[0x9246] = "Bar"; // UNMASKED_RENDERER_WEBGL
  paramMap[0x1f00] = "Nobody"; // VENDOR
  paramMap[0x1f01] = "Jim"; // RENDERER
  paramMap[0x1f02] = "Version 1.0"; // VERSION

  return function (parameter) {
    return paramMap[parameter] || origFn.call(this, parameter);
  };
})(WebGLRenderingContext.prototype.getParameter);

WebGL2RenderingContext.prototype.getParameter = (function (origFn) {
  const paramMap = {};
  paramMap[0x9245] = "Foo"; // UNMASKED_VENDOR_WEBGL
  paramMap[0x9246] = "Bar"; // UNMASKED_RENDERER_WEBGL
  paramMap[0x1f00] = "Nobody"; // VENDOR
  paramMap[0x1f01] = "Jim"; // RENDERER
  paramMap[0x1f02] = "Version 1.0"; // VERSION

  return function (parameter) {
    return paramMap[parameter] || origFn.call(this, parameter);
  };
})(WebGL2RenderingContext.prototype.getParameter);

WebGL2RenderingContext.prototype.getParameter = (function (origFn) {
  const paramMap = {};
  paramMap[0x9245] = "Foo"; // UNMASKED_VENDOR_WEBGL
  paramMap[0x9246] = "Bar"; // UNMASKED_RENDERER_WEBGL
  paramMap[0x1f00] = "Nobody"; // VENDOR
  paramMap[0x1f01] = "Jim"; // RENDERER
  paramMap[0x1f02] = "Version 1.0"; // VERSION

  return function (parameter) {
    return paramMap[parameter] || origFn.call(this, parameter);
  };
})(WebGL2RenderingContext.prototype.getParameter);


WebGLRenderingContext.prototype.getSupportedExtensions = function () {
  return firefox_extensions_gl;
}

WebGL2RenderingContext.prototype.getSupportedExtensions = function () {
  return firefox_extensions_gl2;
}

WebGLRenderingContext.prototype.getContextAttributes = function () {
  return webgl_attrs_firefox;
}

*/

// // Randomizing Canvas

// base64_list = [
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKElEQVR4nMWS3UvCYBTG9w932WXhoiBcb2utbG8xLaJcNvqOrH1JU3MjJ/Rx4S6CtCS7MIvo9onXiyDZECzwwAMHzjk/eM45HDfyGNMSD5MnwuMwYrMcS6iXRr+UKxWSSXpieVQPm+WiALK7AtWZw+dLBl+v68gWRchuajBA8VQsWCLKN8s4dEzMajUIuRqOHAP+XQrzBoFSUaMBS0WKVZug85xGyc9jfO0avBZier+FKb2B44KJ91YGqkMgu8pvgGhJMKoy0NnsKWv4OPWfUG92Ub5vg+zVkdio/NStQIZkS/EAYSfA4sUb+N0mknqIy9s28iUvHkD7LDDPvN6AcNYFLXxgYiuE653HW6ARS2SQZC7AzHYVB7Y5eIn0P85Ih3mkP7/yyOMbLMM2cS3zTbAAAAAASUVORK5CYII=",
//   "data:image/png;base64,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",
//   "data:image/png;base64,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",
//   "data:image/png;base64,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",
//   "data:image/png;base64,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",
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2W70tTURjHz/9VkvmjVC5qQ2IlBPkDfKVvxNheBEpZL+pNBAVtgwRf6sTfA/EHm0gqiixY0WglWYa1XViRSfGV59Kt1HvvOXf3bDg5X3hgcMfd+Xy/z3meMaakpKSkpHQWpEWbUU7FFED0jCfQOtmIeKoKq68v4sZUY3kB3I/XQ/9YAeydMyr/6Twer9SdfoDWP66bBz9eMtNgsgGOu25XstJgsgB4rhcrDSYDwMr17NtLCD0Lor07gsv+MaM6usMIhYLGM1lpMC8Adq4vzLaj/loUF65MWRY9W4x1SEmDFQpg1+t0+ErfpO3hzaLvWEHkXabhGsCp13PvfAjeTeDWnTUEB9fR2ZuAr20OlT5riIbro8hlaj3dDVcAvAmzuTEPKx0c/MbLV1kMj6bR1bd8BCgcCniaVEIAohNm+UUaG8kvSKzuYn1rD6k3OrK5/RNA2x++4eGTJGqvzhgXGx4mFRdAdK5T1fmtL27zzTkEBtcwHnuPrP7zL8jO7nf0P1gRerddGlyAgaUGfN0RA3CaPGZVt0zj3qMtZLbzBsSP/V9C7yYTycyCWsg/0YSZZDX3R2jm8wDMqmqZxtOhFNKZz9z3UvtSG3u+xLw0aEmJApg19Py2a9c9jVGnNGjDirTRvzE6Aj1T49p1KYvMLg1aTqKLbCnWVpDrmgwApzQIgpaUk/NWh48Lui4NwCkN2rC0pDp7IsZ4paLPkXDgRNvoLl2XDuBmUslwXSsGAO9ueO11rVQAIml4dV0rNoBdGrJc10oF8P8fQZmua6UEKHYxBRA9ZQkoKSkpKSmxMtQhlLbo6Z/lAAQAAAAASUVORK5CYII=",
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKElEQVR4nMWS3UvCYBTG9w932WXhoiBcb2utbG8xLaJcNvqOrH1JU3MjJ/Rx4S6CtCS7MIvo9onXiyDZECzwwAMHzjk/eM45HDfyGNMSD5MnwuMwYrMcS6iXRr+UKxWSSXpieVQPm+WiALK7AtWZw+dLBl+v68gWRchuajBA8VQsWCLKN8s4dEzMajUIuRqOHAP+XQrzBoFSUaMBS0WKVZug85xGyc9jfO0avBZier+FKb2B44KJ91YGqkMgu8pvgGhJMKoy0NnsKWv4OPWfUG92Ub5vg+zVkdio/NStQIZkS/EAYSfA4sUb+N0mknqIy9s28iUvHkD7LDDPvN6AcNYFLXxgYiuE653HW6ARS2SQZC7AzHYVB7Y5eIn0P85Ih3mkP7/yyOMbLMM2cS3zTbAAAAAASUVORK5CYII=",
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABUlJREFUaEPtmG2IVGUUx3//e2fWdoZVjJDcoDKojSxFijI3SEl7IdK0ohdbCxSMDGETLD8sEkskUW5JQlqJ+ZKYmhaaZn0pKCr1Q9GbGIQfaulNcWVXdObeE8/MLK3r7s6dO3cXkb0wMHDPc+75nXOe85zziAvk0QXCwTDI+RbJ4YhEjMj1nucvCcPgQ8D9LOK6isUGIyKNEpsLJosAuMpMR8GeAD6v2MKIC5IG8bPZbGtnZ9cyiZNm9gwwBzELYxuwEDge0baKxJIGGSvYYGi6ZNvMCoZfCmwBJgKPA5srsjCicNIgjYK9iDozHgA+KCQYLEZ6TbDTzOYPRlSSBmkWrER8ZsY8oL3k0MskbcSYZlg3YERfRxNLEqTO873VFliTYUuAth5Vyn1ngaS18rQ+DEK3dzqjmRhNKkmQBmCrpDFmdj/wbS8TxiG2YLoc7D7gUDQTo0klCTJTxbNin0ET8E8vE/z6i8csbz/+V4sZvSMWzdoBpJICqUmn0ivyQa7ZjBbgxX4Ovzsk7TTsE4wFwImqCUoKkgKpF2w2dCPYPcCX/RhYLM/SeCzZ9EoKpBHYK/jGOKta9ebxs5lMa2fXqWVgz5YKQiJBSQqkWdLKuvrRrR2/H3sBCq1Jf89M13d5nr8xDINFwMkkSJIAKZXdsMngTuDTMoY1CG0FqzF4CPjxfAEZL7k+Sn+a2VzgjzKG1fm+vzoMAgeeWMuSRETmS3rbT6Xa8rnc88CZCB4udACpdHpVLpdbWkrF2Z7v3R0GodPxdwQdZ4lUC5L1fe+NILQnMZsFfBTBgBRwl2C3ST8LfjCYAOZSznXMLj2/jqAnUZBxrrMVwrBHgd96aK8tdb7XAeN9358UBEGDxKTidNXDh6Vxy/O0LgzDZqBjqEHmCHYgdpuxFrjG8/ybwjCchKwB0//2mpX+OwBD3e+MXYatAr4HjsWdIitNLeflK4EpnuffZmFwqyHXY5Wekq9VNNbQMcwOjBw16mDHiRM/AUdKUXMn+nNIrZ68RMpwOZAs0JjJZKd2dXVOk5js3GpmFG0tGSznSR0YWVd3sKOjwzWDv5Sql0uR/ub0Ym8mfWVmjwFHK02nnvIDgVzkef6rYRg+XTS6aE8xI3S4OJLTYLAPs76axHJ2XQu8D9xAtPNnQH0DgdSMqBnRevrM6aWSjnryPg7CYE93RZH0lhmzOXf2KAfQ/X50YdjC7jWj6nalXGrVAG5f9E6RmyXtclEy6Gv2iAJTk0qlVwRBvtn3U235fOQzqE/d5UD6WuRfUl+//N/29hbMthtVteMLEW8K9pgVZpjYNyxxQMYCGySmm/EUsCaK+/uRmSHYDzpk2CPAr3F1xQGZIbEf44jBg6X6H/f7EwTbTVyNcTvwRVxFlYKMSKfTL+fz+cWS1odh1ZcI9YVbSTTVzKqKbqUghZYE6RbM3Kj6TlwPltYVRoAwtKa0n2rLVbHhKwWZI7HD3AltVaeVY/EzmUxr16muZRiutMfe8JWA1Hq+1xaGttCXNgZhmNR0Nw/xLqYjYLH3XCUgDZK2Yky0ZOftya5yGaqDyKPAORldCYib/jZJau/nAi7udrkC8R6mKdls5qXOzk53nTTQzF/VgVjreS6tQneA7aN4ePW+gIsLUut7fltowUK5C4kg3oVE1IgUrkMRE7MZ57WuWF4bgLQRsQZjHfD6YEZkrsQmK7btUUfauBGKtS5KRGrS6fSKXD7XLPSdmT0MHI71tUFcFAXEySyS1GJmr5RuB/ODaFMs1VFAYike6kXDIEPt8XLfG45IOQ8N9fvhiAy1x8t97z+qP+RC0trEkQAAAABJRU5ErkJggg=="
// ]

// const mainFunction = HTMLCanvasElement.prototype.toDataURL;
// HTMLCanvasElement.prototype.toDataURL = function (type) {
//     return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKElEQVR4nMWS3UvCYBTG9w932WXhoiBcb2utbG8xLaJcNvqOrH1JU3MjJ/Rx4S6CtCS7MIvo9onXiyDZECzwwAMHzjk/eM45HDfyGNMSD5MnwuMwYrMcS6iXRr+UKxWSSXpieVQPm+WiALK7AtWZw+dLBl+v68gWRchuajBA8VQsWCLKN8s4dEzMajUIuRqOHAP+XQrzBoFSUaMBS0WKVZug85xGyc9jfO0avBZier+FKb2B44KJ91YGqkMgu8pvgGhJMKoy0NnsKWv4OPWfUG92Ub5vg+zVkdio/NStQIZkS/EAYSfA4sUb+N0mknqIy9s28iUvHkD7LDDPvN6AcNYFLXxgYiuE653HW6ARS2SQZC7AzHYVB7Y5eIn0P85Ih3mkP7/yyOMbLMM2cS3zTbAAAAAASUVORK5CYII=';
// };
// const imgElement = document.getElementById("myImage");

// // Set the Data URI as the source for the image
// imgElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABUlJREFUaEPtmG2IVGUUx3//e2fWdoZVjJDcoDKojSxFijI3SEl7IdK0ohdbCxSMDGETLD8sEkskUW5JQlqJ+ZKYmhaaZn0pKCr1Q9GbGIQfaulNcWVXdObeE8/MLK3r7s6dO3cXkb0wMHDPc+75nXOe85zziAvk0QXCwTDI+RbJ4YhEjMj1nucvCcPgQ8D9LOK6isUGIyKNEpsLJosAuMpMR8GeAD6v2MKIC5IG8bPZbGtnZ9cyiZNm9gwwBzELYxuwEDge0baKxJIGGSvYYGi6ZNvMCoZfCmwBJgKPA5srsjCicNIgjYK9iDozHgA+KCQYLEZ6TbDTzOYPRlSSBmkWrER8ZsY8oL3k0MskbcSYZlg3YERfRxNLEqTO873VFliTYUuAth5Vyn1ngaS18rQ+DEK3dzqjmRhNKkmQBmCrpDFmdj/wbS8TxiG2YLoc7D7gUDQTo0klCTJTxbNin0ET8E8vE/z6i8csbz/+V4sZvSMWzdoBpJICqUmn0ivyQa7ZjBbgxX4Ovzsk7TTsE4wFwImqCUoKkgKpF2w2dCPYPcCX/RhYLM/SeCzZ9EoKpBHYK/jGOKta9ebxs5lMa2fXqWVgz5YKQiJBSQqkWdLKuvrRrR2/H3sBCq1Jf89M13d5nr8xDINFwMkkSJIAKZXdsMngTuDTMoY1CG0FqzF4CPjxfAEZL7k+Sn+a2VzgjzKG1fm+vzoMAgeeWMuSRETmS3rbT6Xa8rnc88CZCB4udACpdHpVLpdbWkrF2Z7v3R0GodPxdwQdZ4lUC5L1fe+NILQnMZsFfBTBgBRwl2C3ST8LfjCYAOZSznXMLj2/jqAnUZBxrrMVwrBHgd96aK8tdb7XAeN9358UBEGDxKTidNXDh6Vxy/O0LgzDZqBjqEHmCHYgdpuxFrjG8/ybwjCchKwB0//2mpX+OwBD3e+MXYatAr4HjsWdIitNLeflK4EpnuffZmFwqyHXY5Wekq9VNNbQMcwOjBw16mDHiRM/AUdKUXMn+nNIrZ68RMpwOZAs0JjJZKd2dXVOk5js3GpmFG0tGSznSR0YWVd3sKOjwzWDv5Sql0uR/ub0Ym8mfWVmjwFHK02nnvIDgVzkef6rYRg+XTS6aE8xI3S4OJLTYLAPs76axHJ2XQu8D9xAtPNnQH0DgdSMqBnRevrM6aWSjnryPg7CYE93RZH0lhmzOXf2KAfQ/X50YdjC7jWj6nalXGrVAG5f9E6RmyXtclEy6Gv2iAJTk0qlVwRBvtn3U235fOQzqE/d5UD6WuRfUl+//N/29hbMthtVteMLEW8K9pgVZpjYNyxxQMYCGySmm/EUsCaK+/uRmSHYDzpk2CPAr3F1xQGZIbEf44jBg6X6H/f7EwTbTVyNcTvwRVxFlYKMSKfTL+fz+cWS1odh1ZcI9YVbSTTVzKqKbqUghZYE6RbM3Kj6TlwPltYVRoAwtKa0n2rLVbHhKwWZI7HD3AltVaeVY/EzmUxr16muZRiutMfe8JWA1Hq+1xaGttCXNgZhmNR0Nw/xLqYjYLH3XCUgDZK2Yky0ZOftya5yGaqDyKPAORldCYib/jZJau/nAi7udrkC8R6mKdls5qXOzk53nTTQzF/VgVjreS6tQneA7aN4ePW+gIsLUut7fltowUK5C4kg3oVE1IgUrkMRE7MZ57WuWF4bgLQRsQZjHfD6YEZkrsQmK7btUUfauBGKtS5KRGrS6fSKXD7XLPSdmT0MHI71tUFcFAXEySyS1GJmr5RuB/ODaFMs1VFAYike6kXDIEPt8XLfG45IOQ8N9fvhiAy1x8t97z+qP+RC0trEkQAAAABJRU5ErkJggg==";
// const canvas = document.getElementById("canvas")
// const dataURL = canvas.toDataURL()
// console.log(dataURL)