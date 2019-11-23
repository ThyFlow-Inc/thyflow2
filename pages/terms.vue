<template>
  <div>
    <Navbar />
    <header class="pt-9 gradient">
      <div class="container px-1 py-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div
          class="flex flex-col w-full md:w-5/5 justify-center items-center content-center md:text-center"
        >
          <h1 class="my-6 text-5xl font-bold leading-tight text-center text-blue-600">THYFLOW</h1>
        </div>
      </div>
    </header>
    <div class="container mx-auto px-8 lg:px-48">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >TERMS AND CONDITIONS</h1>

      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold">Agreement between User and www.Thyflow.com</div>
        <p>
          Welcome to www.Thyflow.com. The www.Thyflow.com website (the "Site") is comprised of various web pages operated by ThyFlow. www.Thyflow.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of www.Thyflow.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.
          www.Thyflow.com is an E-Commerce Site.
          Customers can easily view profile of local mobile service providers and Book an appointment
        </p>

        <div class="mb-4 text-2xl font-bold">Liability Disclaimer</div>
        <p>
          THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. THYFLOW AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
          THYFLOW AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. THYFLOW AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THYFLOW AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE,
          EVEN IF THYFLOW OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.
          BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
        </p>
        <div class="mb-4 text-2xl font-bold">Termination/Access Restriction</div>
        <p>
          ThyFlow reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of California and you hereby consent to the exclusive jurisdiction and venue of courts in California in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
          You agree that no joint venture, partnership, employment, or agency relationship exists between you and ThyFlow as a result of this agreement or use of the Site. ThyFlow's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of ThyFlow's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by ThyFlow with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
          Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and ThyFlow with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and ThyFlow with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.
        </p>
        <div class="mb-4 text-2xl font-bold">Changes to Terms</div>
        <p>
          ThyFlow reserves the right, in its sole discretion, to change the Terms under which www.Thyflow.com is offered. The most current version of the Terms will supersede all previous versions.
          ThyFlow encourages you to periodically review the Terms to stay informed of our updates.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>