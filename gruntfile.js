module.exports = function(grunt) {
  grunt.initConfig({
    prompt: {
      nwabap_ui5uploader: {
        options: {
          questions: [
            {
              config: "nwabap_ui5uploader.options.auth.user",
              type: "input",
              message: "SAP Username:"
            },
            {
              config: "nwabap_ui5uploader.options.auth.pwd",
              type: "password",
              message: "SAP Password:"
            }
          ]
        }
      }
    },

    nwabap_ui5uploader: {
      options: {
        conn: {
          server: "http://encsapdejci.ee.intern:8010"
        },
        auth: {
          user: "",
          pwd: ""
        }
      },
      upload_build: {
        options: {
          ui5: {
            package: "ZATI_FRONTEND",
            bspcontainer: "ZATI_BEHEER",
            bspcontainer_text: "ATI Beheer",
            transportno: "DEJK919913"
          },
          resources: {
            cwd: "dist",
            src: "**/*.*"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-nwabap-ui5uploader");
  grunt.loadNpmTasks("grunt-prompt");

  grunt.registerTask("upload", "Upload to SAP", [
    "prompt:nwabap_ui5uploader",
    "nwabap_ui5uploader"
  ]);
};
